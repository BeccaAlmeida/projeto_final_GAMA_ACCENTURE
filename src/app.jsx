import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./base/Sidebar";
import Menu from "./base/Menu";

const App = (props) => (
	<Provider store={store}>
		<div className="wrapper">
			<div className="sidebar">Sidebar</div>

			<div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 mb-3">
							<Menu />
						</div>

						<div className="col-12"></div>
					</div>
				</div>
			</div>
		</div>
	</Provider>
);

export default App;
