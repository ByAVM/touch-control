use inputbot::{get_keybd_key, KeybdKey};
use warp::filters::ws::Message;

use serde::{Deserialize, Serialize};
use serde_json::{Number, Result as SerdeResult};

use crate::commands;

#[derive(Serialize, Deserialize)]
pub struct CommandData {
    key: String,
    modifier: Option<String>,
    duration: Option<Number>,
}

#[derive(Serialize, Deserialize)]
pub struct Command {
    method: String,
    data: CommandData,
}

pub fn parse_command(json: &str) -> SerdeResult<Command> {
    let cmd: Command = serde_json::from_str(&json)?;

    return Ok(cmd);
}

pub fn call_command(command: &Command) {
    let modifier = match &command.data.modifier {
        Some(modifier_str) => get_keybd_key_extended(&modifier_str),
        None => None,
    };

    match get_keybd_key_extended(command.data.key.as_str()) {
        Some(key) => match command.method.as_str() {
            commands::KEY_PRESS => {
                commands::key_press(&key, &modifier);
            }
            commands::KEY_HOLD => {
                if let Some(duration) = &command.data.duration {
                    if duration.is_u64() {
                        commands::key_hold(&key, duration.as_u64().unwrap(), &modifier);
                    }
                }
            }

            _ => println!("Key not found: {}", command.data.key),
        },
        None => return,
    };
}

pub fn resolve_command(msg: &Message) {
    let command_json = if let Ok(s) = msg.to_str() {
        s
    } else {
        return;
    };

    let cmd = if let Ok(cmd) = parse_command(command_json) {
        cmd
    } else {
        return;
    };

    call_command(&cmd);
}

pub fn get_keybd_key_extended(string_key: &str) -> Option<KeybdKey> {
    let key = match string_key {
        "LShift" => Some(KeybdKey::LShiftKey),
        "RShift" => Some(KeybdKey::RShiftKey),
        "LAlt" => Some(KeybdKey::LAltKey),
        "RAlt" => Some(KeybdKey::RAltKey),
        "LControl" => Some(KeybdKey::LControlKey),
        "RControl" => Some(KeybdKey::RControlKey),
        "F1" => Some(KeybdKey::F1Key),
        "F2" => Some(KeybdKey::F2Key),
        "F3" => Some(KeybdKey::F3Key),
        "F4" => Some(KeybdKey::F4Key),
        "F5" => Some(KeybdKey::F5Key),
        "F6" => Some(KeybdKey::F6Key),
        "F7" => Some(KeybdKey::F7Key),
        "F8" => Some(KeybdKey::F8Key),
        "F9" => Some(KeybdKey::F9Key),
        "F10" => Some(KeybdKey::F10Key),
        "F11" => Some(KeybdKey::F11Key),
        "F12" => Some(KeybdKey::F12Key),

        _ => get_keybd_key(string_key.chars().nth(0).unwrap())
    };

    return key;
}
