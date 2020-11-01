import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Login from "./login";

const Pages = () => (
	<Switch>
		<Route path="/" exact>
			<Login />
		</Route>
	</Switch>
);

export default Pages;
