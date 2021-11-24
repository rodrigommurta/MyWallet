

import React, { Component } from "react";
import MetaRegistro from "../components/Registros/MetaRegistro";
import Botoes from "../components/Header/Botoes"


import { RecuperarMetas } from "../Service/ServiceMeta";
import Contador from "../components/Contadores/Contador";

export default class RelatosPage extends Component {
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

      const dados = await RecuperarMetas();
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


  render() {

    return (
      <div className="container" style={{ background:"#B0E0E6", padding:"10px"}}>

          <Botoes />


        <div style={this.STYLE}>

        {
          (this.state.Registros.length === 0) ?
           <div>Nenhum Registro realizado!</div>
          :
        (
          <div style={STYLE}>
            {this.state.Registros.map((reg, id) => {
              const bkg = "#3CB371"
              //const dataFormat = reg.data;
              return (
                <div key={id} style={this.state.STYLE_TEXT}>
                  <MetaRegistro background={bkg} registro={reg} Data={"dataFormat"}/>
                </div>
              );
            })}
          </div>
        )
    }

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

const  STYLE = {
  //width: props.width,
  //border: '1px solid blue',
  with: '100%',
  margin: "5px",
  padding: "5px",
}