import { Toolbar, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
	toolbar: {
		color: "white",
		background: "#906cda",
	},
}));
export default function CustomToolbar(props) {
	const classes = useStyles();

	return (
		<Toolbar className={classes.toolbar}>
			<Typography variant="h6" component="div">
				{props.children}
			</Typography>
		</Toolbar>
	);
}
