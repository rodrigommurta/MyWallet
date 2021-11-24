const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const EntradaRoutes = require('./routes/EntradaRoutes');
const MetasRoutes = require('./routes/MetasRoutes');
const ComplementosRouter = require('./routes/ComplementosRouter');
const path = require('path');
const dotenv = require('dotenv');

/**
 * Faz a leitura do arquivo
 * ".env" por padrão
 */
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Vinculando o React ao app
 */
app.use(express.static(path.join(__dirname, '../frontEnd/build')));

/**
 * Rota raiz
 */
app.get('/api/', (_, response) => {
  response.send({
    message:
      'Bem-vindo API de gestão de despesas',
  });
});

/**
 * Rotas principais do app
 */
app.use('/api/Entradas', EntradaRoutes);
app.use('/api/Metas', MetasRoutes);
app.use('/api/Complemento', ComplementosRouter);

/**
 * Conexão ao Banco de Dados
 */
const { DB_CONNECTION } = process.env;

console.log('Iniciando conexão ao MongoDB...');
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      connectedToMongoDB = false;
      console.error(`Erro na conexão ao MongoDB - ${err}`);
    }
  }
);

const { connection } = mongoose;

connection.once('open', () => {
  connectedToMongoDB = true;
  console.log('Conectado ao MongoDB');

  /**
   * Definição de porta e
   * inicialização do app
   */
  const APP_PORT = process.env.PORT || 3001;
  app.listen(APP_PORT, () => {
    console.log(`Servidor iniciado na porta ${APP_PORT}`);
  });
});
