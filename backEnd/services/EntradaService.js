const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const helper = require('../Helpers/Helper.js')


const dotenv = require('dotenv');

const { Parser } = require('json2csv');

dotenv.config();

const EntradaModel = require('../models/EntradaModel');
const CategoriaModel = require('../models/CategoriaModel')

const URL_CONNECTION = process.env.DB_CONNECTION;


const client = mongoose.connect(URL_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

//A partir daqui imprimo as coisas
let Buscas = 0;
const todasEntradas = async () => {
    const data = await EntradaModel.find({});
    console.log('Realizaou a busca: ', Buscas++);

    return data;
}

const CadastrarEntrada = async (Entrada) =>{
    try {
        if(!Entrada) {
            console.log('Chegou vazio')
            return {message: 'Dados Vazios'}
        }

        const EntradaCadastro = new EntradaModel(Entrada);
        const data = await EntradaCadastro.save();

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }


}

const atualizarTextoEntradas = async () =>{
    console.log('entrou na chamada')
    const Entradas = await EntradaModel.find({}, {_id: 1, textoEntrada: 1});
    
    const nomes = []
    const dataNames =  await CategoriaModel.find({}, {_id: 0, Name: 1})
    dataNames.forEach(item => nomes.push(item.Name))

    for(Entrada of Entradas){
        console.log(Entrada) 
        const textoTratado = await helper.removerNome(Entrada.textoEntrada, nomes)
        const {_id} = Entrada
        await EntradaModel.updateOne({_id: _id}, {  $set: {textoEntradaTratado: textoTratado}})
    }
    return 'Foi'
}

module.exports = { todasEntradas, CadastrarEntrada, atualizarTextoEntradas};


