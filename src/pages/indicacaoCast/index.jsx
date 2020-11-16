import React, { Component } from "react";
import {
	Grid,
	TextField,
	Card,
	CardContent,
	createMuiTheme,
	Button,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CustomGrid from "../../components/Grid";
import CustomToolbar from "../../components/CustomToolbar";
import { ThemeProvider } from "styled-components";
import useForm from "../../hooks/useForm";
import api from "../../service/api";

export default function IndicacaoCast() {
	const [{ values, loading }, handleChange] = useForm();

	const pesquisar = () => {
		const { data, quantidade, budget, genre } = values;

		if (!data || !quantidade || !budget || !genre) return;

		api.get(
			`/producer/getCast?quantity=${quantidade}&budget=${budget}&genre=${genre}&date=${data}`
		)
			.then(({ data }) => {
				if (data && data.length === 0) {
					alert("Nenhum ator/atriz encontrado");
				} else {
					alert(`Ator/Atriz recomendado: ${data[0].name}`);
				}
			})
			.catch((err) => {
				alert("Não foi possível executar esta acão");
			});
	};

	return (
		<CustomGrid>
			<Card style={{ width: "100%" }} variant="outlined">
				<CustomToolbar>Pesquisar indicação</CustomToolbar>
				<CardContent>
					<Grid container spacing={3} justify="flex-end">
						<Grid lg={12} md={12} sm={12} xs={12} item>
							<TextField
								style={{ width: "100%" }}
								name="data"
								onChange={(event) => handleChange(event)}
								type="date"
								placeholder="Informe o nome do ator"
								variant="outlined"
							/>
						</Grid>
						<Grid lg={12} md={12} sm={12} xs={12} item>
							<TextField
								style={{ width: "100%" }}
								name="quantidade"
								onChange={(event) => handleChange(event)}
								type="number"
								label="Quantidade"
								placeholder="Informe a quantidade de atorez/atrizes que você precisa"
								variant="outlined"
							/>
						</Grid>

						<Grid lg={12} md={12} sm={12} xs={12} item>
							<TextField
								style={{ width: "100%" }}
								name="budget"
								onChange={(event) => handleChange(event)}
								type="text"
								label="Orçamento"
								placeholder="Informe o seu orçamento"
								variant="outlined"
							/>
						</Grid>

						<Grid lg={12} md={12} sm={12} xs={12} item>
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

						<Grid lg={6} md={6} sm={12} xs={12} item>
							<ThemeProvider theme={theme}>
								<Button
									style={{
										width: "100%",
										background: "#906cda",
									}}
									// className={classes.root}
									type="submit"
									color="primary"
									onClick={pesquisar}
									variant="contained"
									disableElevation
								>
									Pesquisar
								</Button>
							</ThemeProvider>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</CustomGrid>
	);
}

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#906cda",
		},
	},
});

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
