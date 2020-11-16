import React from "react";
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import Api from "../../service/api";
import CustomToolbar from "../CustomToolbar";
import { Grid } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		"& > *": {
// 			margin: theme.spacing(1),
// 			minWidth: 275,
// 		},
// 		title: {
// 			fontSize: 14,
// 		},
// 		pos: {
// 			marginBottom: 12,
// 		},
// 	},
// }));

export default function BasicTextFields() {
	const [values, handleChange] = useForm();

	const saveProducer = (event) => {
		event.preventDefault();
		const { nome, login, senha } = values.values;

		if (!nome || !login || !senha) return;

		Api.post("/producer/create", {
			name: nome,
			user: {
				login: login,
				password: senha,
			},
		})
			.then(() => {
				alert("Produtor/Produtora criado com sucesso!");
			})
			.catch((error) => {
				alert("Não foi possível adicionar o produtor/produtora!");
			});
	};

	// const classes = useStyles();
	return (
		<Card style={{ width: "100%" }} variant="outlined">
			<CustomToolbar>Novo Produtor</CustomToolbar>
			<CardContent>
				<form
					// className={classes.root}
					style={{ width: "100%" }}
					onSubmit={saveProducer}
					autoComplete="off"
				>
					<Grid justify="flex-end" container spacing={3}>
						<Grid lg={12} md={12} sm={12} xs={12} item>
							<TextField
								name="nome"
								style={{ width: "100%" }}
								onChange={(event) => handleChange(event)}
								className="producer"
								id="{producer.name}"
								type="text"
								label="Produtor"
								placeholder="Informe o nome do produtor"
								variant="outlined"
							/>
						</Grid>
						<Grid lg={12} md={12} sm={12} xs={12} item>
							<TextField
								name="login"
								style={{ width: "100%" }}
								onChange={(event) => handleChange(event)}
								className="login"
								id="{producer.login}"
								type="email"
								label="E-mail"
								placeholder="Informe um e-mail"
								variant="outlined"
							/>
						</Grid>

						<Grid lg={12} md={12} sm={12} xs={12} item>
							<TextField
								name="senha"
								style={{ width: "100%" }}
								onChange={(event) => handleChange(event)}
								className="senha"
								id="{producer.password}"
								type="password"
								label="Senha"
								placeholder="Informe uma senha"
								variant="outlined"
							/>
						</Grid>

						<Grid lg={6} md={12} sm={12} xs={12} item>
							<ThemeProvider theme={theme}>
								<Button
									style={{ width: "100%" }}
									// className={classes.root}
									type="submit"
									color="primary"
									variant="contained"
									disableElevation
								>
									Salvar
								</Button>
							</ThemeProvider>
						</Grid>
					</Grid>
				</form>
			</CardContent>
		</Card>
	);
}
const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#906cda",
		},
	},
});
