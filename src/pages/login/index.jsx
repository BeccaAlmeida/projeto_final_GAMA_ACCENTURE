import React, { Component } from "react";

class Login extends Component {
	render() {
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
