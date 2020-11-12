import React from 'react';

import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";
import MeuCep from '../../components/cep/MeuCep';

const Cep = () => (
	<CustomGrid>
		<Grid>
            <MeuCep />
		</Grid>
	</CustomGrid>
);

export default Cep;