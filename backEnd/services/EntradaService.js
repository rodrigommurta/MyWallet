const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const helper = require('../Helpers/Helper.js')


const dotenv = require('dotenv');

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

module.exports = { todasEntradas, CadastrarEntrada};


