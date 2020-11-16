import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import castForm from "../../hooks/castForm";

const useStyles = makeStyles((theme) => ({
	full: {
		width: "100%",
	},
}));

export default function DateTime() {
	const [values, handleChange] = castForm();
	const classes = useStyles();

	return (
		<form className={classes.full} noValidate>
			<TextField
				id="date"
				label="Inicio das Gravações"
				type="date"
				variant="outlined"
				onChange={(event) => {
					handleChange("reserva", event.target.value);
				}}
				className={classes.full}
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</form>
	);
}
