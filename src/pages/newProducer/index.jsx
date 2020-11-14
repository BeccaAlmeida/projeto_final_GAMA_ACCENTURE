import React from "react";
import NewProducer from "../../components/formUsuario/NewProducer";
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";

const NewCast = () => (
	<CustomGrid>
		<Grid>
			<NewProducer />
		</Grid>
	</CustomGrid>
);

export default NewCast;