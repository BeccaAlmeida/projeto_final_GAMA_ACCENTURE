import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import store from "../store";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				store.getState().auth ? (
					<Component {...rest} {...props} />
				) : (
					<Redirect to="/" />
				)
			}
		/>
	);
};

export default PrivateRoute;
