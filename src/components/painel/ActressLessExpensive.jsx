import React, { Component } from "react";
import CardPainel from "./CardPainel";
import api from "../../service/api";

export class ActressLessExpensive extends Component {
	state = {
		title: "Ator/Atriz mais barato",
		value: null,
		load: true,
	};

	componentDidMount() {
		api.get("/actress/getLessExpensive")
			.then((res) => {
				const keys = Object.keys(res.data);
				const actor = res.data[keys[0]];

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
