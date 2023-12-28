use warp::{ws::WebSocket, filters::ws::Message};
use futures::{FutureExt, StreamExt};
use tokio::sync::mpsc;
use tokio_stream::wrappers::UnboundedReceiverStream;

use crate::Result;
use warp::Reply;
pub async fn ws_handler(ws: warp::ws::Ws) -> Result<impl Reply> {
    Ok(ws.on_upgrade(move |socket| client_connection(socket)))
}

use crate::handlers;

pub async fn client_connection(ws: WebSocket) {
    println!("establishing client connection... {:?}", ws);

    let (client_ws_sender, mut client_ws_rcv) = ws.split();
    let (client_sender, client_rcv) = mpsc::unbounded_channel();

    let client_rcv = UnboundedReceiverStream::new(client_rcv);

    tokio::task::spawn(client_rcv.forward(client_ws_sender).map(|result| {
        if let Err(e) = result {
            println!("error sending websocket msg: {}", e);
        }
    }));

    while let Some(result) = client_ws_rcv.next().await {
        let msg = match result {
            Ok(msg) => msg,
            Err(e) => {
                println!("error receiving message for id {}): {}", 1, e);
                break;
            }
        };

        handlers::resolve_command(&msg);

        let _ = client_sender.send(Ok(Message::text("msg")));
    }

    println!("disconnected");
}