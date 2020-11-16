import React from "react";
import ListActress from "./Actress";
import DateTime from "./DateTime";
import Producer from "./Producer";
import CustomGrid from "../Grid";
import {
	CardContent,
	makeStyles,
	Card,
	Grid,
	Button,
	createMuiTheme,
} from "@material-ui/core";
import regeneratorRuntime from "regenerator-runtime";
import CustomToolbar from "../../components/CustomToolbar";
import api from "../../service/api";
import castForm from "../../hooks/castForm";
import { ThemeProvider } from "styled-components";

const useStyles = makeStyles((theme) => ({
	card: {
		width: "100%",
	},
	border: {
		border: "1px solid black",
	},
}));

export default function ReserveCast() {
	const classes = useStyles();
	const [values] = castForm();

	const save = () => {
		api.post("/reserva")
			.then(() => {
				alert("Reserva realizada com sucesso!");
			})
			.catch(() => {
				alert("Não foi possível realizar a reserva!");
			});
	};

	const theme = createMuiTheme({
		palette: {
			primary: {
				main: "#906cda",
			},
		},
	});

	return (
		<CustomGrid>
			<Card className={classes.card} variant="outlined">
				<CustomToolbar>Novo Reserva</CustomToolbar>
				<CardContent>
					<Grid justify="flex-end" container spacing={3}>
						<Grid lg={12} md={6} sm={12} xs={12} item>
							<DateTime />
						</Grid>

						<Grid lg={12} md={6} sm={12} xs={12} item>
							<ListActress />
						</Grid>

						<Grid lg={12} md={6} sm={12} xs={12} item>
							<Producer />
						</Grid>

						<Grid lg={6} md={12} sm={12} xs={12} item>
							<ThemeProvider theme={theme}>
								<Button
									style={{
										width: "100%",
										background: "#906cda",
									}}
									type="submit"
									color="primary"
									variant="contained"
									disableElevation
									onClick={save}
								>
									Salvar
								</Button>
							</ThemeProvider>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</CustomGrid>
	);
}
