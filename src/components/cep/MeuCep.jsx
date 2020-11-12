import React, { Component } from 'react';
import ApiCep from './Api';
import regeneratorRuntime from "regenerator-runtime";

class Api extends Component{

    state= {
        cep: [],
    }
    
    async componentDidMout() {
        const response = await ApiCep.get('');
        console.log(response.data);

        this.setState({ cep: response.data});
    }
    render(){ 
        return (
            <div>
                <h1>cep</h1> 
            </div>
        );
    };
    
}
export default Api;