import Axios from 'axios';

const Api =  Axios.create({
    baseURL: 'https://remotecontroller.herokuapp.com'
});

export default Api;