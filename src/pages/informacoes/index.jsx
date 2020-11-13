import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";
import ListUser from "../../components/formUsuario/ListUser";
//import Api from "../../components/formUsuario/Api"


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
				<ListUser></ListUser>
			</Grid>
		</CustomGrid>
	);
}
