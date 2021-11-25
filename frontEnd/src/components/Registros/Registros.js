import React, { Component } from "react";
import Relato from "./Registro";

class Relatos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      STYLE: {
        width: props.width,
        //border: '1px solid blue',
        with: '100%',
        margin: "5px",
        padding: "5px",
      },
      STYLE_TEXT: {
        //border: '1px solid green',
        //padding: '10px',
        //marginBottom: '10px',
        //height: '87px'
      },
    };
  }

  render() {
    console.log(this.props.relatos)
    if (this.props.registros.length === 0) {
      return <div>Nenhum registro realizado!</div>;
    }
    return (
      <div style={this.state.STYLE}>
        {this.props.registros.map((reg, id) => {
          const bkg = reg.tipo === "Receita"? "#3CB371" : "#FA8072"
          const dataFormat = reg.data;
          return (
            <div key={id} style={this.state.STYLE_TEXT}>
              <Relato background={bkg} registro={reg} Data={dataFormat}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Relatos;
