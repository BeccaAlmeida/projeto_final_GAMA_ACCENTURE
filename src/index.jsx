import React from "react";
import ReactDOM from "react-dom";
import Pages from "./pages";
import "./index.scss";
import App from "./app";
import { Provider } from "react-redux";
import store from "./store";
import { createBrowserHistory } from "history";
import { Router, BrowserRouter } from "react-router-dom";

const history = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Router history={history}>
				<App>
					<Pages />
				</App>
			</Router>
		</BrowserRouter>
	</Provider>,

	document.getElementById("app")
);
