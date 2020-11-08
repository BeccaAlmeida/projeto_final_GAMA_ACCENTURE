import React from "react";
import Menu from "./components/layout/Menu";
import { connect } from "react-redux";
import Sidebar from "./components/layout/Sidebar";
import SideBarItem from "./components/layout/SidebarItem";
import Wrapper from "./components/layout/Wrapper";
import Content from "./components/layout/Content";
import MenuContainer from "./components/layout/MenuContainer";

const App = (props) => {
	return props.auth ? (
		<Wrapper size="250px" transition="all 0.3s">
			<Sidebar size="250px">
				<SideBarItem to="/painel">Painel</SideBarItem>
				<SideBarItem to="/informacoes">Informações</SideBarItem>
				<SideBarItem to="/newCast">+ Novo Elenco</SideBarItem>
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
