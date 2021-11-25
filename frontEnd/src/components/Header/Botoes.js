import React from 'react'
import CadastroButton from './CadastroButton'

export default function Botoes() {
    return (

        <div className="row" style={{padding:"10px"}}>
            
            <div className="col s12 m6">
                <CadastroButton destino="home" texto="Entradas" background="#A9A9A9" width="10em"/>
                <CadastroButton destino="entradas" texto="+" background="#DDA301" width="3em"/>
                
            </div>
            <div className="col s12 m6">
                <CadastroButton destino="metas" texto="Metas" background="#A9A9A9" width="10em"/>
                <CadastroButton destino="meta" texto="+" background="#DDA301" width="3em"/>  
            </div>
        </div>
            
    )
}