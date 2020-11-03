import React, { Component } from "react";
import store from "../../store";
import { Redirect } from "react-router-dom";

class Login extends Component {
	isAuth() {
		return store.getState().auth;
	}

	render() {
		if (this.isAuth()) return <Redirect to="/painel" />;

		return (
			<form className="box" method="POST">
				<h1>login</h1>
				<input
					type="text"
					name=""
					placeholder="Nome de Usuario"
				></input>
				<input type="password" name="" placeholder="senha"></input>

				<input className="bnt" type="submit" value="entrar"></input>
				<input className="bnt" type="submit" value="cadastrar"></input>
			</form>
		);
	}
}

export default Login;
