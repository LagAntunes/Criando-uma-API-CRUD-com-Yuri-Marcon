import { Router } from "express";
import {createTable, InsertPessoa, updatePessoa, selectPessoas, selectUnicaPessoa, deletePessoa} from './controler/pessoa.js'

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode":200,
        "msg": "API rodando e rodando, girando e girando"
    })
})

router.get('/pessoas', selectPessoas);
router.get('/pessoa', selectUnicaPessoa);
router.post('/pessoa', InsertPessoa);
router.put('/pessoa', updatePessoa);
router.delete('/pessoa', deletePessoa);

export default router;