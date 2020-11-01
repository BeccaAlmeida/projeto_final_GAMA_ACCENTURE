import React from "react";
import ReactDOM from "react-dom";
import Pages from "./pages";
import "./index.scss";
import App from "./app";

ReactDOM.render(
	<App>
		<Pages />
	</App>,

	document.getElementById("app")
);
