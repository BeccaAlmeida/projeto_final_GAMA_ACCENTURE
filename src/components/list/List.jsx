import React from "react";
import Apiactress from "../../service/api";

class List extends React.Component {
	state = {
		atores: [],
	};

	componentDidMount() {
		const url = Apiactress.get("/actress/list").then((response) => {
			this.setState({ atores: response.data });
		});
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				this.setState({
					atores: res,
				});
			});
	}

	render() {
		return (
			<div>
				<h1>Lista de Atores</h1>

				<ul>
					{this.state.atores.map((ator) => (
						<li key={ator.name}>
							<p>
								<b>Nome:</b> {ator.name}
							</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default List;
