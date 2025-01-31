import db from './db';


try {
    db.prepare(`
        CREATE TABLE IF NOT EXISTS cars(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            year TEXT NOT NULL,
            km REAL NOT NULL,
            price REAL NOT NULL,
            location TEXT NOT NULL,
            thumb BLOB
        )
    `).run();

    console.log('Database pronta!')
}

catch (error) {
    if(error instanceof Error) {
        console.log('Database falhou: ', error.message);
    } else {
        console.log('Erro desconhecido');
    }
    
}