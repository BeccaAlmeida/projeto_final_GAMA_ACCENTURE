import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		minWidth: 100,
		minHeight: 120,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 14,
	},
	full: {
		width: "100%",
	},
});

let CardPainel = (props) => {
	const classes = useStyles();
	const { title, value, load } = props;

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent className={classes.full}>
				{load ? (
					<CircularProgress></CircularProgress>
				) : (
					<React.Fragment>
						<Typography
							align="left"
							className={classes.title}
							color="textSecondary"
							gutterBottom
						>
							{title || "Informe um titulo"}
						</Typography>
						<Typography align="left" variant="h5" component="h2">
							{value || "Informe um valor"}
						</Typography>
					</React.Fragment>
				)}
			</CardContent>
		</Card>
	);
};

export default CardPainel;
