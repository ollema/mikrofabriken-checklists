CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    rfid TEXT UNIQUE
);

CREATE TABLE IF NOT EXISTS setup_status_kv (
    setup_status_id INTEGER PRIMARY KEY,
    key TEXT UNIQUE NOT NULL,
    value TEXT NOT NULL
);
