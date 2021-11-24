const mongoose = require('mongoose');


let schema = mongoose.Schema({
  tipo: String,
  data: Date,
  valor: Number,
  descricao: String,
  categoria: String,

});

const EntradaModel = mongoose.model('ENTRADA', schema, 'ENTRADAS');

module.exports = EntradaModel;
