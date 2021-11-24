import axios from 'axios'

const api = axios.create({ baseURL: 'api/Metas' });

const CadastroMeta = async (meta) => {
    const data = await api.post('/cadastro', meta)
    return data;
}

const RecuperarMetas = async () => { 

    const retorno = await api.get('/metas');
    const { data: Metas } = retorno.data;
    return Metas;
}

const AtualizaMeta = async (meta, value) => { 

    const retorno = await api.post('/metas', {meta, value});
    const { data: r } = retorno.data;
    return r;
}


export { CadastroMeta, RecuperarMetas, };