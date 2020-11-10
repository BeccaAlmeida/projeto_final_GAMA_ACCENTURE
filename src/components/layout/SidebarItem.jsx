import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router-dom";
import store from "../../store";
import ACTIONS from "../../constants/actions";
import menuService from "../../service/menu";

const SideBarItem = styled.div`
	margin: 1rem;
	padding: 0.8rem 0.9rem;
	border-radius: 5px;
	cursor: pointer;
	color: white;
	background: ${({ selected }) => (selected ? "#906cda" : "transparent")};
	font-family: Poppins;
	text-align: left;
	font-size: 16px !important;
`;

export default function SidebarItem(props) {
	const history = useHistory();
	const getRoute = () => store.getState().route;
	const handleClick = () => {
		store.dispatch({
			type: ACTIONS.SET_ROUTE,
			data: props.to,
		});

		menuService.changeMenu();
		history.push(props.to);
	};

	return (
		<SideBarItem selected={getRoute() === props.to} onClick={handleClick}>
			{props.children}
		</SideBarItem>
	);
}
