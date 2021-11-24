const mongoose = require('mongoose');


let schema = mongoose.Schema({
  name: String,
  dataCriacao: Date,
  dataFim: Date,
  valorObjetivo: Number,
  valorPoupado: Number,
  descricao: String,
  categoria: String,

});

const MetaModel = mongoose.model('META', schema, 'METAS');

module.exports = MetaModel;
