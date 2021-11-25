const express = require('express');
const MetasRouter = express.Router();
const MetasServices = require('../services/MetaService.js');
const SUCESSO_BUSCA = {"Mensage": "Objeto Encontrados"}
const SUCESSO_MODIFICACAO = {"Mensage": "Objeto Modificados"}
const SUCESSO_INSERCAO = {"Mensage": "Objeto Inseridos"}
const FALHA_BUSCA = {"Mensage": "Objeto não Encontrado"}
const FALHA_CADASTRO = {"Mensage": "Cadastro não foi realizado"}
const OUTROS_ERROS = {"Mensage": "Erros na busca da informação"}


MetasRouter.get('/', async (_, resp)=>{
    try {
        resp.send(
            {
                message:'Nessa rota esta as funcionalidades referentes as metas',
            });
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA});
    }
    
});


MetasRouter.get('/metas', async (req, resp)=>{
    try {
        const data = await MetasServices.todasMetas();
        resp.send({SUCESSO_BUSCA, data});
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA, error});
    }
    
});


MetasRouter.post('/cadastro', async (req, resp)=>{
    try {
        const entrada = req.body;
        const data = await MetasServices.CadastrarMeta(entrada);

        resp.send({SUCESSO_INSERCAO, data});
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_CADASTRO, error});
    }
    
});


MetasRouter.post('/atualizar', async (req, resp)=>{

    try {
        console.log('chamou')
        const {name, value} = req;
        const data = await MetasServices.atualizarMeta({name, value});
        if(data)
            resp.send('executou')
        else 
            resp.send('é ok, algo aconteceu');
            
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA, error});
    }
    
});



module.exports = MetasRouter;
