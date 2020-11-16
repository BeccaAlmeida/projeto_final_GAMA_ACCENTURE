import React from "react";
import ReserveCast from "../../components/formNewcast/ReserveCast";
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";
import Actress from '../../components/formNewcast/Actress';

const NewCast = () => (
	<CustomGrid>
		<Grid>
			<ReserveCast />
			<Actress />
		</Grid>
	</CustomGrid>
);

export default NewCast;
