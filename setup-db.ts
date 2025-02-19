import db from './db';

try {
   
    db.prepare(`DROP TABLE IF EXISTS cars`).run();
    console.log('Tabela "cars" excluída com sucesso (se existia).');

    
    db.prepare(`
        CREATE TABLE IF NOT EXISTS cars(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            year TEXT NOT NULL,
            km REAL NOT NULL,
            price REAL NOT NULL,
            location TEXT NOT NULL,
            thumb TEXT NOT NULL,
            gear TEXT NOT NULL,
            finalNumber TEXT NOT NULL,
            color TEXT NOT NULL,
            exchange TEXT NOT NULL,
            ipva TEXT NOT NULL,
            licenced TEXT NOT NULL,
            gasType TEXT NOT NULL
        )
    `).run();

    console.log('Database pronta!');
} catch (error) {
    if (error instanceof Error) {
        console.log('Database falhou: ', error.message);
    } else {
        console.log('Erro desconhecido');
    }
}