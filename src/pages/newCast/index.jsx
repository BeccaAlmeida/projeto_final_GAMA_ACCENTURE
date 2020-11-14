import React from "react";
import ReserveCast from "../../components/formNewcast/ReserveCast";
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";

const NewCast = () => (
	<CustomGrid>
		<Grid>
			<ReserveCast />
		</Grid>
	</CustomGrid>
);

export default NewCast;
