import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import CardPainel from "./CardPainel";
import api from "../../service/api";

export class ActresstMostExpensive extends Component {
	state = {
		title: "Ator/Atriz mais caro",
		value: null,
		load: true,
	};

	componentDidMount() {
		api.get("/actress/getMostExpensive")
			.then((res) => {
				const keys = Object.keys(res.data);
				const actor =
					res.data[keys[0]].length > 0
						? res.data[keys[0]][0]
						: res.data[keys[0]];

				this.setState({
					value: actor,
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
