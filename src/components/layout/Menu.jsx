import React, { Component } from "react";
import styled from "styled-components";
import menuService from "../../service/menu";
import store from "../../store";

class Menu extends Component {
	changeMenu() {
		return menuService.changeMenu();
	}

	render() {
		return (
			<StyledBurger
				size={"2rem"}
				className="my-3 menu"
				onClick={() => this.changeMenu()}
				open={store.getState().menu}
			>
				<div></div>
				<div></div>
				<div></div>
			</StyledBurger>
		);
	}
}

const StyledBurger = styled.button`
	position: absolute;
	top: 5%;
	height: 32px;
	left: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: ${({ size }) => size};
	height: ${({ size }) => size};
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;

	&:focus {
		outline: none;
	}

	div {
		width: ${({ size }) => size};
		height: 0.25rem;
		background: #333131;
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;

		:first-child {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) =>
				open ? "translateX(20px)" : "translateX(0)"};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

export default Menu;
