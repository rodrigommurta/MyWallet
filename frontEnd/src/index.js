import React from 'react';
import ReactDOM from 'react-dom';

import 'materialize-css/dist/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import App from './App';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Entradas from './Pages/Entradas';
import Metas from './Pages/Metas';
import CadastrarEntradaPage from './Pages/CadastrarEntradaPage';
import CadastrarMetaPage from './Pages/CadastrarMetaPage';


//import * as serviceWorker from 'servic'

ReactDOM.render(
 (
 
 <Router>

    <App>
      <Switch>
        <Route exact path="/" component={Entradas}/>
        <Route exact path="/home" component={Entradas}/>
        <Route path="/metas" component={Metas}/>
        <Route path="/relato" component={CadastrarEntradaPage}/>
        <Route path="/meta" component={CadastrarMetaPage}/>
      </Switch>
    </App>

  </Router>
),
  document.getElementById('root')
);
