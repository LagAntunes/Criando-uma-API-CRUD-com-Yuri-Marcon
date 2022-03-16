import { openDb } from '../configDB.js'

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS pessoa (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    })
}