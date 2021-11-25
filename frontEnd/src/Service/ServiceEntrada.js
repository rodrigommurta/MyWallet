import axios from 'axios'

const api = axios.create({ baseURL: 'api/Entradas' });

const CadastroEntrada = async (entrada) => {
    const data = await api.post('/cadastro', entrada)
    return data;
}

const RecuperarEntradas = async () => { 

    const retorno = await api.get('/entradas');
    const { data: Entradas } = retorno.data;
    return Entradas;
}

const RecuperarRelatosParaGraficoGenero = async () => { 
    const retorno = await api.get('/relatosporgenero');
    const { data: ResumoPorGenero } = retorno.data;


    return ResumoPorGenero;
}

const DownloadDadosCsv = async (filters) =>{

    const data ={
        params: {...filters},
    }
    await api.get('/download/', data).then(response => {
        window.open(response.request.responseURL);
    });
}

export { CadastroEntrada, RecuperarEntradas, RecuperarRelatosParaGraficoGenero, DownloadDadosCsv };