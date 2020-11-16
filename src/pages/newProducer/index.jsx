import React from "react";
import NewProducer from "../../components/formUsuario/NewProducer";
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";

const NewCast = () => (
	<CustomGrid>
		<Grid lg={12} md={12} sm={12} xs={12}>
			<NewProducer />
		</Grid>
	</CustomGrid>
);

export default NewCast;
