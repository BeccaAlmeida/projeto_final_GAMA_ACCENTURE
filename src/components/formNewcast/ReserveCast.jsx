import React, { useEffect } from "react";
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import Api from "../../service/api";
import regeneratorRuntime from "regenerator-runtime";
import CustomToolbar from "../../components/CustomToolbar";
import api from "../../service/api";
import castForm from "../../hooks/castForm";
import { ThemeProvider } from "styled-components";

export default function Asynchronous() {
	const [open, setOpen] = React.useState(false);
	const [options, setOptions] = React.useState([]);
	const loading = open && options.length === 0;
	const [values, handleChange] = useForm();

	const saveReserve = (event) => {
		event.preventDefault();
		Api.post("/reserve/save/{idDaAtriz}", {
			reserveDate: values.values.data,
			producer: {
				id: values.values.producer.id,
			},
		})
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
		console.log(values);
	};

	const useStyles = makeStyles((theme) => ({
		container: {
			display: "flex",
			flexWrap: "wrap",
		},
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(2),
			width: 200,
		},
		root: {
			"& > *": {
				margin: theme.spacing(1),
				minWidth: 275,
			},
			title: {
				fontSize: 14,
			},
			pos: {
				marginBottom: 12,
			},
		},
	}));

	useEffect(() => {
		if (!loading) {
			return undefined;
		}

		(async () => {
			const response = await Api.get("/producer/18");
			setOptions([response.data]);
		})();
	}, [loading]);

	useEffect(() => {
		if (!open) {
			setOptions([]);
		}
	}, [open]);

	const classes = useStyles();
	return (
		<div className="reservDate">
			<form
				onSubmit={saveReserve}
				className={classes.container}
				noValidate
			>
				<TextField
					className="data"
					name="data"
					onChange={(event) => handleChange(event)}
					id="date"
					label="Inicio das Gravações"
					type="date"
					className={classes.textField}
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<div className="prod">
					<Autocomplete
						name="producer"
						onInputChange={(event, newValue) => {
							var evento = {
								target: { name: "producer", value: newValue },
							};
							handleChange(evento);
						}}
						style={{ width: 300 }}
						open={open}
						onOpen={() => setOpen(true)}
						onClose={() => setOpen(false)}
						getOptionSelected={(option, value) =>
							option.id === value.id
						}
						getOptionLabel={(option) => option.name}
						options={options}
						loading={loading}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Produtor/Produtora"
								variant="outlined"
								InputProps={{
									...params.InputProps,
									endAdornment: (
										<React.Fragment>
											{loading ? (
												<CircularProgress
													color="inherit"
													size={20}
												/>
											) : null}
											{params.InputProps.endAdornment}
										</React.Fragment>
									),
								}}
							/>
						)}
					/>
				</div>
				<ThemeProvider theme={theme}>
					<Button
						className={classes.root}
						type="submit"
						variant="contained"
						color="primary"
					>
						Salvar
					</Button>
				</ThemeProvider>
			</form>
		</div>
	);
}
const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#fff",
		},
	},
});
