const express = require('express');
const EntradasRouter = express.Router();
const EnstradaServices = require('../services/EntradaService.js');

const SUCESSO_BUSCA = {"Mensage": "Objeto Encontrados"}
const SUCESSO_MODIFICACAO = {"Mensage": "Objeto Modificados"}
const SUCESSO_INSERCAO = {"Mensage": "Objeto Inseridos"}
const FALHA_BUSCA = {"Mensage": "Objeto não Encontrado"}
const FALHA_CADASTRO = {"Mensage": "Cadastro não foi realizado"}
const OUTROS_ERROS = {"Mensage": "Erros na busca da informação"}


EntradasRouter.get('/', async (_, resp)=>{
    try {
        resp.send(
            {
                message:'Nessa rota esta as funcionalidades referentes as entradas',
            });
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA});
    }
    
});


EntradasRouter.get('/entradas', async (req, resp)=>{
    try {
        const data = await EnstradaServices.todasEntradas();
        resp.send({SUCESSO_BUSCA, data});
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA, error});
    }
    
});


EntradasRouter.post('/cadastro', async (req, resp)=>{
    try {
        const entrada = req.body;
        const data = await EnstradaServices.CadastrarEntrada(entrada);

        resp.send({SUCESSO_INSERCAO, data});
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_CADASTRO, error});
    }
    
});


EntradasRouter.get('/atualizar', async (req, resp)=>{

    try {
        console.log('chamou')
        const data = await EnstradaServices.atualizarTextoRelatos();
        if(data)
            resp.send('executou')
        else 
            resp.send('é ok, algo aconteceu');
    } catch (error) {
        resp.status(500).send({FALHA: FALHA_BUSCA, error});
    }
    
});



module.exports = EntradasRouter;
