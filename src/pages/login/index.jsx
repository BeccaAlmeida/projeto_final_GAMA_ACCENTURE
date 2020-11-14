import React, { Component } from "react";
import store from "../../store";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import ACTIONS from "../../constants/actions";
import authService from "../../service/auth";

class Login extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		button: "Entrar",
		error: null,
	};

	isAuth() {
		return store.getState().auth;
	}

	handlerSubmit($event) {
		$event.preventDefault();

		if (this.state.button !== "Entrar") return;

		this.setState({
			...this.state,
			error: null,
		});

		let form = new FormData($event.target);
		const login = form.get("usuario");
		const password = form.get("senha");

		this.setState({
			button: "Validando...",
		});

		authService
			.auth(login, password)
			.then(() => {
				store.dispatch({
					type: ACTIONS.SET_ROUTE,
					data: "/painel",
				});
			})
			.catch((error) => {
				this.setState({
					button: "Entrar",
				});

				this.setState({
					...this.state,
					error,
				});
			});
	}

	render() {
		if (this.isAuth()) return <Redirect to="/painel" />;

		return (
			<Fullscreen>
				<Box onSubmit={this.handlerSubmit.bind(this)} method="POST">
					<h1>login</h1>
					<InputForm
						type="text"
						name="usuario"
						placeholder="Informe seu usuário"
						autoComplete="off"
					/>

					<InputForm
						type="password"
						name="senha"
						placeholder="Informe sua senha"
						autoComplete="off"
					/>

					<Error>{this.state.error ?? this.state.error}</Error>

					{/* <NewUser /> */}

					<ButtonForm disabled={this.state.button === "Entrando..."}>
						{this.state.button}
					</ButtonForm>
				</Box>
			</Fullscreen>
		);
	}
}

const Fullscreen = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const InputForm = styled.input`
	border: 0;
	background: none;
	display: block;
	margin: 20px auto;
	text-align: center;
	color: white;
	border: 1.5px solid #2980b9;
	padding: 14px 10px;
	width: 200px;
	outline: none;
	transition: 0.3s;
	font-size: 14px;
	border-radius: 30px;

	&:focus {
		width: 280px;
		border-color: #906cda;
	}
`;

const Box = styled.form`
	width: 350px;
	padding: 40px;
	position: absolute;
	background: #333131;
	text-align: center;
	border-radius: 23px;

	h1 {
		color: white;
		text-transform: uppercase;
		font-weight: 300;
		font-size: 30px;
	}
`;

const ButtonForm = styled.button`
	border: 0;
	background: none;
	display: block;
	margin: 20px auto;
	text-align: center;
	color: white;
	border: 1.5px solid #2980b9;
	padding: 14px 40px;
	width: 200px;
	outline: none;
	transition: 0.3s;
	font-size: 14px;
	border-radius: 30px;
	cursor: pointer;
`;

const Error = styled.p`
	color: white;
	height: 1rem;
`;

export default Login;
