import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login";
import Painel from "./painel";
import Informacoes from "./informacoes";
import NovoElenco from "./newCast";
import NewUser from "./newUser";
import ListName from '../components/list/List';
import PrivateRoute from "../components/PrivateRoute";

const Pages = () => (
	<Switch>
		<Route path="/" component={Login} exact />
		<PrivateRoute path="/painel" component={Painel} />
		<PrivateRoute path="/informacoes" component={Informacoes} />
		<PrivateRoute path="/newCast" component={NovoElenco} />
		<PrivateRoute path="/newUser" component={NewUser} />
		<PrivateRoute path="/list" component={ListName} />
	</Switch>
);

export default Pages;
