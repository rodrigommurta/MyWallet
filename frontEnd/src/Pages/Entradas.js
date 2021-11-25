

import React, { Component } from "react";
import Registros from "../components/Registros/Registros";


//import RangeFilter from './RangeFilter';


import { RecuperarEntradas } from "../Service/ServiceEntrada";
import Contador from "../components/Contadores/Contador";
import Botoes from "../components/Header/Botoes";

export default class EntradasPage extends Component {
  STYLE = {
    padding: "5px",
    //border: "1px solid #4c4c4c",
    margin: "5px",
  };

  constructor(props) {
    super(props);
    this.state = {
      Registros: [],
      RegistrosResumo: [],
      filters: [],
      Receita: 0,
      Despesa: 0
    };
  }

  async componentDidMount() {
    try {

      const dados = await RecuperarEntradas();
      console.log(dados)
      //const dadosResumo = dados.slice(0, 5);
      const filters = [
        { filterName: "generoPessoa", value: "" },
        { filterName: "ufRelato", value: "" },
      ];

      const receita = dados.reduce((acc, curr) =>{
        return acc + (curr.tipo == 'Receita' ? curr.valor : 0)
      }, 0);
      const despesa = dados.reduce((acc, curr) =>{
        return acc + (curr.tipo == "Despesa" ? curr.valor : 0)
      }, 0);

      this.setState({ Registros: dados });
      this.setState({ RegistrosResumo: dados });
      this.setState({ Receita: receita });
      this.setState({ Despesa: despesa });
    } catch (error) {
      console.log("Deu ruim");
    }
  }

  Filtered(filterName, value) {
    const newFilter = [...this.state.filters];
    newFilter.forEach((item) => {
      if (item.filterName === filterName) item.value = value;
      return item;
    });

    this.setState({ filters: newFilter });
    this.filtraValuesToShow();
  }

  filtraValuesToShow() {
    const { filters, Registros: Relatos } = this.state;
    const dados = Relatos.filter((relato) => {
      let filtered = true;
      for (let filter of filters) {
        if (filter.value)
          if (relato[filter.filterName] !== filter.value) filtered = false;
      }
      return filtered;
    });

    //const dadosResumo = dados.slice(0, 5);
    this.setState({ RelatosResumo: dados });
  }

  render() {

    return (
      <div className="container" style={STYLE_CONTAINER}>

        

        <div style={this.STYLE}>
        
        <Botoes />
        
        <div style={STYLE_BOX} className="row">
          <Contador
            value={"R$"+this.state.Receita}
            texto="Receita Total"
            background="#3CB371"
          />
          <Contador
            value={"R$"+this.state.Despesa}
            texto="Despesa Total"
            background="#FA8072"
          />

          <Contador
            value={"R$"+ (this.state.Receita - this.state.Despesa)}
            texto="Saldo"
            background={this.state.Receita - this.state.Despesa>= 0? "#3CB371": "#FA8072"}
          />

        </div>
          <Registros
            registros={this.state.RegistrosResumo}
            width="100%"
            TamanoTexto={300}
          />
        </div>
      </div>
    );
  }
}

const STYLE_BOX = {
  display: "flex",
  justifyContent: "flex-start",
  aligItems: "flex-start",

};

const STYLE_CONTAINER = { background:"#B0E0E6", padding:"10px"}