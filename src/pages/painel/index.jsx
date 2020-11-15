import React, { Component } from "react";
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";
import { ActressLessExpensive } from "../../components/painel/ActressLessExpensive";
import { ActressLessRelevant } from "../../components/painel/ActressLessRelevant";
import { ActresstMostExpensive } from "../../components/painel/ActresstMostExpensive";
import { ActressMostRelevant } from "../../components/painel/ActressMostRelevant";
import ActressTable from "../../components/painel/ActressTable";
import { ReserveList } from "../../components/painel/ReserveList";

class Painel extends Component {
	render() {
		return (
			<main>
				<CustomGrid>
					<Grid lg={2} md={6} sm={12} xs={12} item>
						<ActressLessExpensive />
					</Grid>

					<Grid lg={2} md={6} sm={12} xs={12} item>
						<ActressLessRelevant />
					</Grid>

					<Grid lg={2} md={6} sm={12} xs={12} item>
						<ActresstMostExpensive />
					</Grid>

					<Grid lg={2} md={6} sm={12} xs={12} item>
						<ActressMostRelevant />
					</Grid>
					<Grid lg={2} md={6} sm={12} xs={12} item>
						<ReserveList />
					</Grid>
					<Grid lg={8} md={7} sm={12} xs={12} item>
						<ActressTable />
					</Grid>
				</CustomGrid>
			</main>
		);
	}
}

export default Painel;
