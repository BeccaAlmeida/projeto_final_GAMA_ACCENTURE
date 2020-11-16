import React from "react";
import ReserveCast from "../../components/formNewcast/ReserveCast";
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";
import Reserves from '../../components/Listando/Reserves';
const NewCast = () => (
	<CustomGrid>
		<Grid>
			<Reserves />
		</Grid>
	</CustomGrid>
);

export default NewCast;
