import React, { useEffect, useState } from "react";
import api from "../../service/api";
import {
	Card,
	CardContent,
	CircularProgress,
	TableContainer,
	Table,
	Paper,
	TableHead,
	TableCell,
	TableBody,
	TableRow,
	makeStyles,
	Toolbar,
	Typography,
	Button,
} from "@material-ui/core";
import menuService from "../../service/menu";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	removePaddingHorizontal: {
		paddingLeft: 0,
		paddingRight: 0,
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
	button: {
		margin: theme.spacing(1),
		fontSize: 10,
		borderRadius: 50,
		color: "white",
		backgroundColor: "#906cda",
		"&:hover": {
			color: "#906cda",
		},
	},
}));

let ActressTable = () => {
	let [atores, setAtores] = useState([]);
	let [loading, setLoading] = useState(true);
	const classes = useStyles();

	useEffect(() => {
		api.get("/actress/list")
			.then(({ data }) => {
				setAtores(data);
				setLoading(false);
			})
			.catch(() => {
				setAtores([]);
				setLoading(false);
			});
	});

	let status = (params) => {
		if (params) {
			return "Alocado";
		} else {
			return "Disponível";
		}
	};

	return (
		<Card variant="outlined">
			<CardContent className={classes.removePaddingHorizontal}>
				<Toolbar className={classes.toolbar}>
					<Typography variant="h6" component="div">
						Atorez/Atrizes
					</Typography>
				</Toolbar>

				{loading ? (
					<CircularProgress />
				) : atores.length > 0 ? (
					<TableContainer elevation={0} component={Paper}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Ator/Atriz</TableCell>
									<TableCell align="right">Status</TableCell>
									<TableCell align="right">Preço</TableCell>
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
											{ator.price} R$
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				) : (
					<h1>Nenhum registro encontrado</h1>
				)}
			</CardContent>
		</Card>
	);
};
export default ActressTable;
