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

const useStyles = makeStyles((theme) => ({
	root: {
		// "& > *": {
		// 	margin: theme.spacing(1),
		// 	minWidth: 275,
		// },
		// title: {
		// 	fontSize: 14,
		// },
		// pos: {
		// 	marginBottom: 12,
		// },
	},
}));

export default function BasicTextFields() {
	const [values, handleChange] = useForm();
	const [options, setOptions] = React.useState([]);

	const saveActress = (event) => {
		event.preventDefault();
		const {
			nome,
			gender,
			price,
			relevance,
			genre,
			login,
			password,
		} = values.values;

		Api.post("/actress/create", {
			name: nome,
			gender: gender,
			price: price,
			relevance: relevance,
			genre: genre,
			status: false,
			user: {
				login: login,
				password: password,
			},
		})
			.then((response) => {
				alert("Atriz/Ator adicionado com sucesso!");
			})
			.catch((error) => {
				alert("Não foi possível adicionar o atriz/ator!");
			});
	};
	const classes = useStyles();
	return (
		<Card style={{ width: "100%" }} variant="outlined">
			<CustomToolbar>Novo Ator/Atriz</CustomToolbar>
			<CardContent>
				{/* <h1>Meus Dados</h1> */}
				<form
					style={{ width: "100%" }}
					onSubmit={saveActress}
					// className={classes.root}
					noValidate
					autoComplete="off"
				>
					<Grid justify="flex-end" spacing={3} container>
						<Grid lg={12} md={12} xs={12} sm={12} item>
							<TextField
								style={{ width: "100%" }}
								name="nome"
								onChange={(event) => handleChange(event)}
								className="actress"
								id="{actress.name}"
								type="text"
								label="Nome do Ator"
								placeholder="Informe o nome do ator"
								variant="outlined"
							/>
						</Grid>
						<Grid lg={6} md={12} xs={12} sm={12} item>
							<Autocomplete
								name="gender"
								onInputChange={(event, newValue) => {
									var evento = {
										target: {
											name: "gender",
											value: newValue,
										},
									};
									handleChange(evento);
								}}
								id="combo-box-demo1"
								type="text"
								options={gender}
								getOptionLabel={(option) => option.gender}
								renderInput={(params) => (
									<TextField
										style={{ width: "100%" }}
										{...params}
										label="Sexo"
										placeholder="Selecione um opção"
										variant="outlined"
									/>
								)}
							/>
						</Grid>
						<Grid lg={6} md={6} xs={12} sm={12} item>
							<Autocomplete
								name="genre"
								onInputChange={(event, newValue) => {
									var evento = {
										target: {
											name: "genre",
											value: newValue,
										},
									};
									handleChange(evento);
								}}
								id="combo-box-demo2"
								type="text"
								options={genre}
								getOptionLabel={(option) => option.genre}
								renderInput={(params) => (
									<TextField
										style={{ width: "100%" }}
										{...params}
										label="Gênero que atua"
										placeholder="Selecione um opção"
										variant="outlined"
									/>
								)}
							/>
						</Grid>

						<Grid lg={6} md={6} xs={12} sm={12} item>
							<TextField
								style={{ width: "100%" }}
								name="price"
								onChange={(event) => handleChange(event)}
								className="price"
								id="{actress.price}"
								type="price"
								label="Preço"
								placeholder="Informe o preço"
								variant="outlined"
							/>
						</Grid>

						<Grid lg={6} md={6} xs={12} sm={12} item>
							<TextField
								style={{ width: "100%" }}
								name="relevance"
								onChange={(event) => handleChange(event)}
								className="relevancia"
								id="{actress.relevancia}"
								type="number"
								label="Relevância"
								placeholder="Informe a relevância do ator/atriz"
								variant="outlined"
							/>
						</Grid>

						<Grid lg={6} md={6} xs={12} sm={12} item>
							<TextField
								style={{ width: "100%" }}
								name="login"
								onChange={(event) => handleChange(event)}
								className="email"
								id="{actress.email}"
								type="email"
								label="E-mail"
								placeholder="Informe um e-mail"
								variant="outlined"
							/>
						</Grid>

						<Grid lg={6} md={6} xs={12} sm={12} item>
							<TextField
								style={{ width: "100%" }}
								name="password"
								onChange={(event) => handleChange(event)}
								className="password"
								id="{actress.password}"
								type="password"
								label="Senha"
								placeholder="Informe a senha"
								variant="outlined"
							/>
						</Grid>
						<Grid lg={6} md={6} xs={12} sm={12} item>
							<ThemeProvider theme={theme}>
								<Button
									style={{ width: "100%" }}
									type="submit"
									variant="contained"
									color="primary"
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
const gender = [
	{ gender: "Feminino" },
	{ gender: "Masculino" },
	{ gender: "Outros" },
];
const genre = [
	{ genre: "Ação" },
	{ genre: "Animação" },
	{ genre: "Comédia" },
	{ genre: "Documentário" },
	{ genre: "Fantasia" },
	{ genre: "Faroeste-western" },
	{ genre: "Ficção-científica" },
	{ genre: "Guerra" },
	{ genre: "Musical" },
	{ genre: "Erótico" },
	{ genre: "Romance" },
	{ genre: "Suspense" },
	{ genre: "Terror" },
	{ genre: "Trágedia/Drama" },
];
