
import React from "react";
import WorkGenre from "../../components/formNewCast/WorkGenre";
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";
import MaximumBudget from '../../components/formNewcast/MaximumBudget'
const NewCast = () => (
	<CustomGrid>
		<Grid>
			<WorkGenre />
			<MaximumBudget />
		</Grid>
	</CustomGrid>
	
);

export default NewCast;