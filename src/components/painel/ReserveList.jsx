import React, { Component } from "react";
import CardPainel from "./CardPainel";
import api from "../../service/api";

export class ReserveList extends Component {
	state = {
		title: "Reservas",
		value: null,
		load: true,
	};

	componentDidMount() {
		api.get("/reserve/list")
			.then((res) => {
				this.setState({
					value: res.data.length.toString(),
					load: false,
				});
			})
			.catch(() => {
				this.setState({
					value: "Não foi possível carregar os dados",
					load: false,
				});
			});
	}

	render() {
		return (
			<CardPainel
				title={this.state.title}
				value={this.state.value}
				load={this.state.load}
			/>
		);
	}
}
