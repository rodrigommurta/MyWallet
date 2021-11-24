const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const dotenv = require('dotenv');

const { Parser } = require('json2csv');

dotenv.config();

const CategoriaModel = require('../models/CategoriaModel');


const URL_CONNECTION = process.env.DB_CONNECTION;


const client = mongoose.connect(URL_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });


const BuscaDominios = async () => {
    const data = await CategoriaModel.find({}, {});
    return data;
}


module.exports = { BuscaDominios};

