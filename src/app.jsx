import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Menu from "./base/Menu";

console.log();

const App = (props) =>
	store.getState().auth ? (
		<Provider store={store}>
			<div className="wrapper">
				<div className="sidebar">Sidebar</div>

				<div className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12 mb-3">
								<Menu />
							</div>

							<div className="col-12">
								<div className="container-fluid py-5">
									<BrowserRouter>
										{props.children}
									</BrowserRouter>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Provider>
	) : (
		<Provider store={store}>
			<div className="row">
				<div className="col-12">
					<BrowserRouter>{props.children}</BrowserRouter>
				</div>
			</div>
		</Provider>
	);

export default App;
