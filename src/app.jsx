import React from "react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import styled from "styled-components";
import { connect } from "react-redux";

const App = (props) =>
	props.auth ? (
		<Wrapper size="250px" transition="all 0.3s">
			<Sidebar size="250px">
				<SideBarItem>Painel</SideBarItem>
				<SideBarItem>Atores/Atrizes</SideBarItem>
			</Sidebar>

			<Content size="250px">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 mb-3">
							<Menu />
						</div>

						<div className="col-12">
							<div className="container-fluid py-5">
								<BrowserRouter>{props.children}</BrowserRouter>
							</div>
						</div>
					</div>
				</div>
			</Content>
		</Wrapper>
	) : (
		<BrowserRouter>{props.children}</BrowserRouter>
	);

const SideBarItem = styled.div`
	margin: 1rem;
	padding: 0.8rem 0.9rem;
	border-radius: 5px;
	background: ${({ selected }) => (selected ? "#906cda" : "")};
`;

const Wrapper = styled.div.attrs({
	className: "wrapper",
})`
	transition: ${({ transition }) => transition};
	display: flex;
	position: relative;

	&.open {
		.sidebar {
			transition: ${({ transition }) => transition};
			transform: translateX(0);
		}

		.content {
			transition: ${({ transition }) => transition};
			margin-left: ${({ size }) => size};
			overflow-x: hidden;
		}
	}

	.menu {
		display: none;
	}

	@media only screen and (max-width: 600px) {
		.sidebar {
			transform: translateX(-${({ size }) => size});
			transition: ${({ transition }) => transition};
		}

		.content {
			margin-left: 0;
			transition: ${({ transition }) => transition};
		}

		.menu {
			display: flex;
		}
	}
`;

const Content = styled.div.attrs({
	className: "content",
})`
	width: 100%;
	margin-left: ${({ size }) => size};
`;

const Sidebar = styled.div.attrs({
	className: "sidebar",
})`
	width: 100%;
	max-width: ${({ size }) => size};
	position: absolute;
	height: 100vh;
	background-color: #333131;
	color: white;
`;

const mapStateToProps = (store) => {
	return store;
};

export default connect(mapStateToProps, null)(App);
