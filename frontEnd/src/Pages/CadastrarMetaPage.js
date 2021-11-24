import React, { Component } from "react";
import Select from 'react-select';


import { categorias_despesa } from "../Help/Dominios";
import * as service from "../Service/ServiceMeta";


import Modal from "react-modal";

import M from "materialize-css";
//import B from "bootstrap"


class CadastrarMetaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      name: "",
      dataCriacao: Date.now(),
      dataFim: Date.now(),
      valorObjetivo: 0,
      valorInicial: 0,
      descricao: "",
      categoria: "",
      categoriaOp: []
    };
    
   
    this.load();
  }


  load = async () => {

  }

  customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }

  cadastrarRelato = async (event) => {
    event.preventDefault();
    console.log('Entrei aqui')

    var metaCreate = {

      name: this.state.name,
      dataCriacao: this.state.dataCriacao,
      dataFim: this.state.dataFim,
      valorObjetivo: this.state.valorObjetivo,
      valorPoupado: this.state.valorInicial,
      descricao: this.state.descricao,
      categoria: this.state.categoria,
    };


    console.log(metaCreate)
    try {
      const resp = await service.CadastroMeta(metaCreate);
      console.log(resp.status)
      //Adicionar aqui o comando para mostrar o Modal
      window.location = "/";
    } catch (error) {
      console.log("Não rolou");
    }
  };

  async componentDidMount() {
    M.AutoInit();
    try {
      

    } catch (error) {
      console.log("Deu ruim");
    }
  }

  async componentDidUpdate(prevProps, prevState){
    try {
      

    } catch (error) {
      console.log("Deu ruim");
    }
  }


  setProperty(key, event) {
    if(event.target)
      this.setState({ [key]: event.target.value });
    else if(event.value)
      this.setState({ [key]: event.value });
    else 
      console.log('Nenhum atributo cadastrado')
  }


  render() {

    return (
      <div className="container">
        <h5 style={{ margin: "15px", padding: "1px", textSize: "2em" }}>
          Entrada
        </h5>

        <div style={{ padding: "15px" }}>
          <form onSubmit={(e) => this.cadastrarRelato(e)}>
            <div style={this.state.STYLE} className="row">
              
            <label className="col-sm-6 col-md-4">
                Nome Meta: 
                <input
                  type="text"
                  name="nome"
                  value={this.state.name}
                  onChange={(e) => this.setProperty("name", e)}
                />
              </label>


              <label className="col-sm-6 col-md-4">
                Valor Objetivo R$ :
                <input
                  required
                  type="number"
                  min="0"
                  name="valor"
                  value={this.state.valorObjetivo}
                  onChange={(e) => this.setProperty("valorObjetivo", e)}
                />
              </label>

              <label className="col-sm-6 col-md-4">
                Valor Inicial R$ :
                <input
                  required
                  type="number"
                  min="0"
                  name="valor"
                  value={this.state.valorInicial}
                  onChange={(e) => this.setProperty("valorInicial", e)}
                />
              </label>

              <label className="col-sm-6 col-md-4">
                Categoria:
                <select
                  required
                  value={this.state.categoria}
                  onChange={(e) => this.setProperty("categoria", e)}
                  name="categoria"
                >
                  <option disabled value="">
                    Selecionar
                  </option>
                  {
                   categorias_despesa.map((cat) => {
                    return (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    );
                  })
                  }
                </select>
              </label>
              <label className="col-sm-6 col-md-4">
                Data Inicio: 
                <input
                  required
                  type="date"
                  name="data"
                  value={this.state.dataCriacao}
                  onChange={(e) => this.setProperty("dataCriacao", e)}
                />
              </label>

              <label className="col-sm-6 col-md-4">
                Data Fim: 
                <input
                  required
                  type="date"
                  name="data"
                  value={this.state.dataFim}
                  onChange={(e) => this.setProperty("dataFim", e)}
                />
              </label>

              <label className="col-sm-8 col-md-8">
                Descrição: 
                <input
                  type="text"
                  name="Descricao"
                  value={this.state.descricao}
                  onChange={(e) => this.setProperty("descricao", e)}
                />
              </label>
              
            </div>
            
            <button  
              className="waves-effect grey darken-1 btn"
              style={{ fontSize: "0.9em", height:"5em", lineHeight: '2', width:"12em" }} 
            >
              <input type="submit" value="Registrar"  />
            </button>
          </form>
        </div>

      </div>
    );
  }
}

export default CadastrarMetaPage;
