import Axios from 'axios';

const Api =  Axios.create({
    baseURL: 'https://viacep.com.br/ws/01001000/json/'
});

export default Api;