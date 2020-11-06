import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login";
import Painel from "./painel";
import Informacoes from "./informacoes";
import PrivateRoute from "../components/PrivateRoute";

const Pages = () => (
	<Switch>
		<Route path="/" component={Login} exact />
		<PrivateRoute path="/painel" component={Painel} />
		<PrivateRoute path="/informacoes" component={Informacoes} />
	</Switch>
);

export default Pages;
