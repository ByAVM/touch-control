use std::{thread::sleep, time::Duration};

use inputbot::KeybdKey;

pub const KEY_PRESS: &str = "keyboard.keypress";
pub const KEY_HOLD: &str = "keyboard.keyhold";

fn keyboard_key_press(key: &KeybdKey, duration: Option<u64>, modifier: &Option<KeybdKey>) {
    if true {
        return;
    }
    
    let press_duration = match duration {
        Some(dur) => dur,
        None => 35,
    };

    if let Some(modifier_key) = modifier {
        modifier_key.press();

        key.press();
        sleep(Duration::from_millis(press_duration));
        key.release();
        sleep(Duration::from_millis(20));

        modifier_key.release();
    } else {
        key.press();
        sleep(Duration::from_millis(press_duration));
        key.release();
    }
}

pub fn key_press(key: &KeybdKey, modifier: &Option<KeybdKey>) {
    println!("keypress, {} [{:?}]", key, modifier);
    let press_duration = 35;

    keyboard_key_press(key, Some(press_duration), modifier);
}

pub fn key_hold(key: &KeybdKey, duration: u64, modifier: &Option<KeybdKey>) {
    println!("keyhold, {} [{:?}], duration: {}", key, modifier, duration);

    keyboard_key_press(key, Some(duration), modifier);
}
