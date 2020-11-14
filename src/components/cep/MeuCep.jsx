import React, { Component } from 'react';
import ApiCep from './Api';
import NewUser from '../formUsuario/NewUser';
import regeneratorRuntime from "regenerator-runtime";

class Api extends Component{

    state= {
        cep: null,
        user: null,
    }
    
    componentDidMount() {
        ApiCep.get('').then ((response) => {
            console.log(response.data);
            this.setState({ cep: response.data });
        }); 
        
    }
    render(){ 
        return (
            <div>
                <h1>{this.state.cep?.logradouro}</h1> 
            </div>
        );
    };
    
}
export default Api;