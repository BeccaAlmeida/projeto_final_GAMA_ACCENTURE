
import React from "react";
import WorkGenre from "../../components/formNewCast/WorkGenre";
import MaximumBudget from '../../components/formNewcast/MaximumBudget';
import CastSize from '../../components/formNewcast/CastSize';
import Botao from '../../components/formNewcast/ButtonSearch';
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";
import Content from '../../components/layout/Content';

const NewCast = () => (
	<CustomGrid>
		<Grid>
			<WorkGenre />
			<MaximumBudget />
			<CastSize />
			<Botao />
		</Grid>
	</CustomGrid>
	
);

export default NewCast;