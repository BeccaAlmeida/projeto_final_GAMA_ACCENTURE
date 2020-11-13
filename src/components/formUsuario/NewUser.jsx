import React, { Component } from 'react';
import ApiUser from '../../service/api';

class NewUser extends Component{
    componentDidMount() {
        ApiUser.post('/actress/create', {
            "name": "Rebecca",
            "gender": "Comédia",
            "price": "200.000.00",
            "relevance": 0,
            "genre": "Comédia",
            "status": true,
            "user": {
                "login": "login",
                "password": "senha"
            }
        }).then ((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        }); 
        ApiUser.get('/actress/list').then ((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }
    render(){ 
        return (
            <div>
                <h1>Novo usuario</h1> 
                <div>
                    <label htmlFor="">Nome:</label>
                    <input type="text"/>
                    
                </div>
            </div>
        );
    };
        
}
export default NewUser;