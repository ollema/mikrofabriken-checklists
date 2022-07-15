import Database from 'tauri-plugin-sql-api';
import type { UserType } from '../models/user';

let db: null | Database = null;

export async function connect(): Promise<Database> {
	if (db) {
		return db;
	}
	db = await Database.load('sqlite:database.db');
	return db;
}

export async function getAllUsers(): Promise<UserType[]> {
	const db = await connect();
	const query = `--sql
        SELECT * FROM users
    `;
	return await db.select(query);
}
