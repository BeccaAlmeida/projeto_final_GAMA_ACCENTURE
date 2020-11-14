import React, { Component } from 'react'
import Api from '../../service/api';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class ListUser extends Component {
	state = {
		atores: []
	}

	componentDidMount(props) {
		Api.get('/actress/list').then((response) => {
			console.log(response.data);
			this.setState({ atores: response.data })
		}).catch(this.setState({atores: [{name: "Não a atores", price: "", status: true, relevance: "" }]}))
	}

	render() {
		function status(params) {
			if (params) { return "Alocado" }
			else { return "Disponível" }
		}

		const btn = {
			backgroundColor: "transparent",
			border: "none",
			cursor: "pointer",
			padding: "10px",
		}

		const { atores } = this.state;
		return (
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Ator/Atriz</TableCell>
							<TableCell align="right"><button style={btn}>Status</button></TableCell>
							<TableCell align="right"><button style={btn}>Relevância</button></TableCell>
							<TableCell align="right"><button style={btn}>Preço</button></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{atores.map((ator) => (
							<TableRow key={ator.name}>
								<TableCell component="th" scope="ator">
									{ator.name}
								</TableCell>
								<TableCell align="right">
									{status(ator.status)}
								</TableCell>
								<TableCell align="right">
									{ator.relevance}
								</TableCell>
								<TableCell align="right">
									{ator.price} R$
									</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		)
	}
}
export default ListUser;