import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

const App = (props) => (
	<Provider store={store}>
		<BrowserRouter>{props.children}</BrowserRouter>
	</Provider>
);

export default App;
