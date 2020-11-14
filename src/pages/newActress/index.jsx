import React from "react";
import NewUsu from '../../components/formUsuario/NewActress';
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";

const NewUser = () => (
	<CustomGrid>
		<Grid>
			<NewUsu />
		</Grid>
	</CustomGrid>
	
);

export default NewUser;