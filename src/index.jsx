import React from "react";
import ReactDOM from "react-dom";
import Pages from "./pages";
import "./index.scss";
import App from "./app";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
	<Provider store={store}>
		<App>
			<Pages />
		</App>
	</Provider>,

	document.getElementById("app")
);
