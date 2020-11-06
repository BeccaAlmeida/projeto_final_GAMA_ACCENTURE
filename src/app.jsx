import React from "react";
import Menu from "./components/base/Menu";
import { connect } from "react-redux";
import Sidebar from "./components/base/Sidebar";
import SideBarItem from "./components/base/SidebarItem";
import Wrapper from "./components/base/Wrapper";
import Content from "./components/base/Content";
import MenuContainer from "./components/base/MenuContainer";

const App = (props) => {
	return props.auth ? (
		<Wrapper size="250px" transition="all 0.3s">
			<Sidebar size="250px">
				<SideBarItem to="/painel">Painel</SideBarItem>
				<SideBarItem to="/informacoes">Informações</SideBarItem>
			</Sidebar>

			<Content size="250px">
				<MenuContainer>
					<Menu />
				</MenuContainer>
				{props.children}
			</Content>
		</Wrapper>
	) : (
		props.children
	);
};

const mapStateToProps = (store) => {
	return store;
};

export default connect(mapStateToProps, null)(App);
