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

export async function updatePessoa(pessoa) {
    openDb().then(db => {
        db.run('UPDATE pessoa SET nome=? , idade=? WHERE id=?' , [pessoa.nome, pessoa.idade, pessoa.id]);
    })
}

export async function selectPessoas() {
    return openDb().then(db => {
        return db.all('SELECT * FROM pessoa')
        .then(res => res)
    });
}

export async function selectUnicaPessoa(id) {
    return openDb().then(db => {
        return db.get('SELECT * FROM pessoa WHERE id=?', [id])
        .then(res => res)
    });
}

export async function deletePessoa(id) {
    return openDb().then(db => {
        return db.get('DELETE FROM pessoa WHERE id=?', [id])
        .then(res => res)
    });
}