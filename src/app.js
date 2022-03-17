import {openDb} from './configDB.js';
import {createTable, InsertPessoa} from './controler/pessoa.js'

import express from 'express';
const app = express();
app.use(express.json());

createTable();

app.get('/', function(req, res) {
    res.send('olá mundo')
})

app.post('/pessoa', function(req, res) {
    console.log(req.body)
    InsertPessoa(req.body)
    res.json({
        "statusCode": 200
    })
})
app.listen(3000, () => console.log('API rodando'))
