import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login";
import Painel from "./painel";
import PrivateRoute from "../components/PrivateRoute";

const Pages = () => (
	<Switch>
		<Route path="/" component={Login} exact />
		<PrivateRoute path="/painel" component={Painel} exact />
	</Switch>
);

export default Pages;
