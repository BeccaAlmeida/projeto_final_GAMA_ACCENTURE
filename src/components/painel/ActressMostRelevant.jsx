import React, { Component } from "react";
import CardPainel from "./CardPainel";
import api from "../../service/api";

export class ActressMostRelevant extends Component {
	state = {
		title: "Ator/Atriz mais relevante",
		value: null,
		load: true,
	};

	componentDidMount() {
		api.get("/actress/getMostRelevant")
			.then((res) => {
				const keys = Object.keys(res.data);
				const actor = res.data[keys[keys.length - 1]][0];

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
