import Axios from 'axios';

const Api =  Axios.create({
    baseURL: 'https://viacep.com.br/ws/01001000/json/?callback=callback_name'
});

export default Api;