import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
	table: {
		minWidth: 550,
	},
});

function createData(name, status, relevancia, preco) {
	return { name, status, relevancia, preco };
}

const rows = [
	createData("Ator1", "Disponível", 6.0, 10000),
	createData("Atriz2", "Atuando", 9.0, 15000),
	createData("Ator3", "Atuando", 16.0, 12000),
	createData("Atriz4", "Atuando", 3.7, 8000),
	createData("Ator5", "Disponível", 16.0, 13000),
];

export default function BasicTable() {
	const classes = useStyles();

	return (
		<CustomGrid>
			<Grid xs={12} item>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Ator/Atriz</TableCell>
								<TableCell align="right">Status</TableCell>
								<TableCell align="right">Relevância</TableCell>
								<TableCell align="right">Preço</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name}>
									<TableCell component="th" scope="row">
										{row.name}
									</TableCell>
									<TableCell align="right">
										{row.status}
									</TableCell>
									<TableCell align="right">
										{row.relevancia}
									</TableCell>
									<TableCell align="right">
										{row.preco} R$
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</CustomGrid>
	);
}
