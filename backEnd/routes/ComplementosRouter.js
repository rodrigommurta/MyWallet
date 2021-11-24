const express = require('express');
const ComplementosRouter = express.Router();
const ComplementosServices = require('../services/ComplementoServices.js');

const SUCESSO_BUSCA = {"Mensage": "Objeto Encontrados"}
const SUCESSO_MODIFICACAO = {"Mensage": "Objeto Modificados"}
const SUCESSO_INSERCAO = {"Mensage": "Objeto Inseridos"}
const FALHA_BUSCA = {"Mensage": "Objeto não Encontrado"}
const OUTROS_ERROS = {"Mensage": "Erros na busca da informação"}


ComplementosRouter.get('/', async (_, resp)=>{
    try {
        resp.send(
            {
                message:'Nessa rota esta as funcionalidades referentes aos complementos',
            });
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA});
    }
    
});

ComplementosRouter.get('/dominios', async (req, resp)=>{
    try {
        const data = await ComplementosServices.BuscaDominios();
        resp.send({SUCESSO_BUSCA, data});
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA, error});
    }
    
});


module.exports = ComplementosRouter;
