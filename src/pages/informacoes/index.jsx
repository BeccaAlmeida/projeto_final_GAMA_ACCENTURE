import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";
import ListUser from "../../components/Listando/ListUser";

const useStyles = makeStyles({
	table: {
		minWidth: 550,
	},
});


export default function BasicTable() {

	return (
		<CustomGrid>
			<Grid xs={12} item>
				<ListUser></ListUser>
			</Grid>
		</CustomGrid>
	);
}
