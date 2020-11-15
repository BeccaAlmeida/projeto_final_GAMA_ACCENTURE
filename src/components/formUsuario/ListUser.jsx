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
			console.log(response.data)
			this.setState({ atores: response.data })
		}).catch(this.setState({atores: []}))
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
    
        function sortedPrice() {
			console.log("Chamou")
			
            atores.sort(function(a,b)  {
                return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
            })
			this.setState({atores})
			
            
		}
		
		function sortedRelevance(){
			atores.sort(function(a,b)  {
                return a.relevance > b.relevance ? -1 : a.relevance < b.relevance ? 1 : 0;
            })
            this.setState({atores})
		}

		function sortedStatus(){
			atores.sort(function(a,b)  {
                return a.status > b.status ? -1 : a.status < b.status ? 1 : 0;
            })
            this.setState({atores})
		}

		function sortedName() {
			atores.sort(function(a,b)  {
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            })
            this.setState({atores})
		}

        const { atores } = this.state;
        
        if(atores.length === 0){ return <h1>Não há atores</h1>}
        
		return (
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell><button style={btn} onClick={sortedName.bind(this)}>Ator/Atriz</button></TableCell>
							<TableCell align="right"><button style={btn} onClick={sortedStatus.bind(this)}>Status</button></TableCell>
							<TableCell align="right"><button style={btn} onClick={sortedRelevance.bind(this)}>Relevância</button></TableCell>
							<TableCell align="right"><button style={btn} onClick={sortedPrice.bind(this)}>Preço</button></TableCell>
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