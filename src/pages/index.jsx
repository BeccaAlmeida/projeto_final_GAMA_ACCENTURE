import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login";
import Painel from "./painel";
import Informacoes from "./informacoes";
import NovoElenco from "./newCast";
import Cep from "./cep";
import BuscarElenco from "../components/formNewcast/ButtonSearch";

import PrivateRoute from "../components/PrivateRoute";

const Pages = () => (
	<Switch>
		<Route path="/" component={Login} exact />
		<PrivateRoute path="/painel" component={Painel} />
		<PrivateRoute path="/informacoes" component={Informacoes} />
		<PrivateRoute path="/newCast" component={NovoElenco} />
		<PrivateRoute path="/informacoes" component={BuscarElenco} />
		<PrivateRoute path="/cep" component={Cep} />
	</Switch>
);

export default Pages;
