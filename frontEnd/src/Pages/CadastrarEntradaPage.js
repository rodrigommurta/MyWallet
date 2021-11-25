import React, { Component } from "react";
import Select from 'react-select';

import { categorias_despesa } from "../Help/Dominios";
import * as service from "../Service/ServiceEntrada";


import Modal from "react-modal";

import M from "materialize-css";
//import B from "bootstrap"


class CadastrarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

      tipo: "Despesa",
      data: Date.now(),
      valor: 0,
      descricao: "",
      categoria: "",
      categoriaOp: []
    };
    
   
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

  cadastrarEntrada = async (event) => {
    event.preventDefault();
    console.log('Entrei aqui')

    var entradaCreate = {
      tipo: this.state.tipo,
      data: this.state.data,
      valor: this.state.valor,
      descricao: this.state.descricao,
      categoria: this.state.categoria,
    };


    console.log(entradaCreate)
    try {
      const resp = await service.CadastroEntrada(entradaCreate);
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
          <form onSubmit={(e) => this.cadastrarEntrada(e)}>
            <div style={this.state.STYLE} className="row">
              
              <label className="col-sm-6 col-md-4">
                Tipo
                <select 
                  value={this.state.tipo}
                  onChange={(e) => this.setProperty("tipo", e)}
                  name="tipo"
                >
                  <option key={"Despesa"} value={"Despesa"}>
                    {"Despesa"}
                  </option>
                  <option key={"Receita"} value={"Receita"}>
                    {"Receita"}
                  </option>
                </select>
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
                Valor R$ :
                <input
                  required
                  type="number"
                  min="0"
                  name="valor"
                  value={this.state.valor}
                  onChange={(e) => this.setProperty("valor", e)}
                />
              </label>

              <label className="col-sm-6 col-md-4">
                Data: 
                <input
                  required
                  type="date"
                  name="data"
                  value={this.state.data}
                  onChange={(e) => this.setProperty("data", e)}
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

export default CadastrarPage;
