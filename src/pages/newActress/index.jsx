import React from "react";
import NewUsu from "../../components/formUsuario/NewActress";
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";

const NewUser = () => (
	<CustomGrid>
		<Grid lg={12} md={12} sm={12} xs={12} item>
			<NewUsu />
		</Grid>
	</CustomGrid>
);

export default NewUser;
