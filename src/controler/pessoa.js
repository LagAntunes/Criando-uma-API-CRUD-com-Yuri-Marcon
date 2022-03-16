import { openDb } from '../configDB.js'

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS pessoa (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    })
}

export async function InsertPessoa(pessoa) {
    openDb().then(db => {
        db.run('INSERT INTO pessoa (nome, idade) VALUES (?, ?)' , [pessoa.nome, pessoa.idade]);
    })
}