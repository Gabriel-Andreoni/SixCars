import Database from 'better-sqlite3'

import type {Database as DatabaseType} from 'better-sqlite3';

declare global {
    var db: DatabaseType | undefined;
}

const db = global.db || new Database('./database.sqlite', {verbose: console.log});

if(process.env.NODE_ENV === 'development') {
    global.db = db;
}

export default db;