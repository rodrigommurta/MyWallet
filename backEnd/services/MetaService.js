const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const helper = require('../Helpers/Helper.js')


const dotenv = require('dotenv');

const { Parser } = require('json2csv');

dotenv.config();

const MetaModel = require('../models/MetaModel');
const CategoriaModel = require('../models/CategoriaModel')

const URL_CONNECTION = process.env.DB_CONNECTION;


const client = mongoose.connect(URL_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

//A partir daqui imprimo as coisas
let Buscas = 0;
const todasMetas = async () => {
    const data = await MetaModel.find({});
    console.log('Realizaou a busca: ', Buscas++);

    return data;
}

const CadastrarMeta = async (Meta) =>{
    console.log(Meta)
    try {
        if(!Meta) {
            console.log('Chegou vazio')
            return {message: 'Dados Vazios'}
        }

        const EntradaCadastro = new MetaModel(Meta);
        const data = await EntradaCadastro.save();

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const atualizarMeta = async ({metaName, valorAdd}) =>{
    console.log('entrou na chamada')
    const Meta = await MetaModel.find({name: metaName}, {_id: 1, name: 1, textoEntrada: 1, valorPoupado: 1});

    const newValue = Meta.valorPoupado + valorAdd

    MetaModel.updatOne({name: metaName}, {set:{valorPoupado: newValue}})

    return newValue;
}

module.exports = { todasMetas, CadastrarMeta, atualizarMeta};
