import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login";
import Painel from "./painel";
import Informacoes from "./informacoes";
import NovoElenco from "./newCast";
import NewActress from "./newActress";
import NewProducer from "./newProducer";
import MyReserves from "./reservas";
import PrivateRoute from "../components/PrivateRoute";
import IndicacaoCast from "./indicacaoCast";

const Pages = () => (
	<Switch>
		<Route path="/" component={Login} exact />
		<PrivateRoute path="/painel" component={Painel} />
		<PrivateRoute path="/informacoes" component={Informacoes} />
		<PrivateRoute path="/newCast" component={NovoElenco} />
		<PrivateRoute path="/newActress" component={NewActress} />
		<PrivateRoute path="/newProducer" component={NewProducer} />
		<PrivateRoute path="/reservas" component={MyReserves} />
	</Switch>
);

export default Pages;
