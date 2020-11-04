import React, { Component } from "react";
import store from "../../store";
import { Redirect } from "react-router-dom";
import Select from './components/Select.js';

class NewCast extends Component {
	isAuth() {
		return store.getState().auth;
	}

	render() {
		if (this.isAuth()) return <Redirect to="/painel" />;

		return (
			<Select />
		);
	}
}

export default NewCast;
