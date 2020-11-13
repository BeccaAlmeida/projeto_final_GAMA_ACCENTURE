import React, { Component } from 'react';
import Api from './Api';

class NewUser extends Component{
    componentDidMount(props) {
        Api.post('/actress/create', {
            "name": "Nome",
            "gender": "Gênero",
            "price": 0,
            "relevance": 0,
            "genre": "Gênero que atua",
            "status": true,
            "user": {
                "login": "login",
                "password": "senha"
            }
        }).then ((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err)
        }); 
        Api.get('/actress/list').then ((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err)
        })
    }
    render(){ 
        return (
            <div>
                    
            </div>
        );
    };
        
}
export default NewUser;