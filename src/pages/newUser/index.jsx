import React from "react";
import NewUser from '../../components/formUsuario/NewUser';
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";

const NewCast = () => (
	<CustomGrid>
		<Grid>
			<NewUser />
		</Grid>
	</CustomGrid>
	
);

export default NewCast;