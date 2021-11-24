const formatData = (data) =>{
    const dataText = String(data)
    const ano = dataText.substr(0,4);
    const mes = dataText.substr(5,2);
    const dia = dataText.substr(8,2);

    return `${dia}/${mes}/${ano}`
}

export {formatData}