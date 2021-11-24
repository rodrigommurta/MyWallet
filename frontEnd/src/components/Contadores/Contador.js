import React from 'react'

export default function Contador({texto, value, background}) {
    return (
        <div style={{...STYLE, background: background??'#000000'}} className='col s6 m6 card darken-4'>
            <div style={{fontSize:'1em', color:'white'}}>{texto}</div>
            <span style={{fontSize:'1.2em', color:'white'}}>{value}</span>
        </div>
    )
}

const STYLE = {
    width: '30%',
    height: '90px',
    padding: '10px',
    margin: '10px',
    fontSize: '1em'
}

//B43A20