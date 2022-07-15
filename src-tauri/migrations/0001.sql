CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    rfid TEXT UNIQUE
);

-- remove
INSERT INTO users (name) VALUES ('test user 1');
INSERT INTO users (name) VALUES ('test user 2');
INSERT INTO users (name) VALUES ('test user 3');
