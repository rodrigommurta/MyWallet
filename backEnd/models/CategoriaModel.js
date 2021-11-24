
const mongoose = require('mongoose');


let schema = mongoose.Schema({
  ID: Number,
  Categoria: String,
});

const CategoriaModel = mongoose.model('CATEGORIA', schema, 'CATEGORIAS');

module.exports = CategoriaModel;