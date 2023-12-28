use clap::Parser;
use local_ip_address::local_ip;
use std::path::Path;
use warp::{Filter, Rejection};
mod commands;
mod handlers;
mod ws;

type Result<T> = std::result::Result<T, Rejection>;

#[derive(Parser)]
#[command(author, version, about, long_about = None)]
struct Cli {
    #[arg(short, long)]
    port: Option<u16>,
}

#[tokio::main]
async fn main() {
    println!("Configuring websocket route");

    let static_dir: &Path = Path::new("front/dist");
    let index_file_path = static_dir.join("index.html");

    let ws_route = warp::path("ws").and(warp::ws()).and_then(ws::ws_handler);

    let files_route = warp::fs::dir(static_dir);
    let spa_route = files_route.or(warp::fs::file(index_file_path));



    let routes = warp::get().and(ws_route)
        .or(spa_route)
        .with(warp::cors().allow_any_origin());

    let cli = Cli::parse();

    let ip_addr = local_ip().unwrap();

    let port = match cli.port {
        Some(port) => port,
        None => 8080,
    };

    println!("Starting server on {} with port {}", ip_addr, port);

    warp::serve(routes)
        // .tls()
        // .cert_path("cert.pem")
        // .key_path("key.rsa")
        .run(([0, 0, 0, 0], port))
        .await;
}
