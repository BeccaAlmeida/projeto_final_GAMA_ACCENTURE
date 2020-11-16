import React from "react";
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";
import ListUser from "../../components/Listando/ListUser";

export default function BasicTable() {
	return (
		<CustomGrid>
			<Grid xs={12} item>
				<ListUser></ListUser>
			</Grid>
		</CustomGrid>
	);
}
