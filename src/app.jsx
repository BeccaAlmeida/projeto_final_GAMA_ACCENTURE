import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import styled from "styled-components";

let menu = [
	{
		name: "Painel",
		path: "/",
		selected: false,
	},
	{
		name: "Painel",
		path: "/",
		selected: false,
	},
	{
		name: "Painel",
		path: "/",
		selected: false,
	},
];

const App = (props) =>
	store.getState().auth ? (
		<Provider store={store}>
			<div className="wrapper">
				<div className="sidebar ">
					<SideBarItem selected={true}>Painel</SideBarItem>
					<SideBarItem selected={false}>Atorez/Atrizes</SideBarItem>
					<SideBarItem selected={false}>Sair</SideBarItem>
				</div>

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
			<BrowserRouter>{props.children}</BrowserRouter>
		</Provider>
	);

const SideBarItem = styled.div`
	margin: 1rem;
	padding: 0.8rem 0.9rem;
	border-radius: 5px;
	background: ${({ selected }) => (selected ? "#906cda" : "")};
`;

export default App;
