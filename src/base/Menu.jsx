import React, { Component } from "react";

class Menu extends Component {
	getElementMenu() {
		return document.getElementsByClassName("wrapper")[0];
	}

	changeMenu() {
		if (this.menuIsOpen()) {
			this.getElementMenu().classList.remove("open");
		} else {
			this.getElementMenu().classList.add("open");
		}
	}

	menuIsOpen() {
		return this.getElementMenu().classList.contains("open");
	}

	render() {
		return (
			<div className="menu" onClick={this.changeMenu.bind(this)}>
				Menu
			</div>
		);
	}
}

export default Menu;
