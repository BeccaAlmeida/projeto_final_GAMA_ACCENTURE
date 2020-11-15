import React, { Component, useEffect } from "react";
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CustomCard from "../../components/Card";
import { Loading } from "../../components/Loading";
import { ActressLessExpensive } from "../../components/painel/ActressLessExpensive";
import { ActressLessRelevant } from "../../components/painel/ActressLessRelevant";
import { ActresstMostExpensive } from "../../components/painel/ActresstMostExpensive";
import { ActressMostRelevant } from "../../components/painel/ActressMostRelevant";
import ActressTable from "../../components/painel/ActressTable";

class Painel extends Component {
	render() {
		return (
			<main>
				<CustomGrid>
					<Grid lg={3} md={6} sm={12} xs={12} item>
						<ActressLessExpensive />
					</Grid>

					<Grid lg={3} md={6} sm={12} xs={12} item>
						<ActressLessRelevant />
					</Grid>

					<Grid lg={3} md={6} sm={12} xs={12} item>
						<ActresstMostExpensive />
					</Grid>

					<Grid lg={3} md={6} sm={12} xs={12} item>
						<ActressMostRelevant />
					</Grid>
					<Grid lg={8} md={7} sm={12} xs={12} item>
						<ActressTable />
					</Grid>

					<Grid lg={4} md={5} sm={12} xs={12} item>
						Table
					</Grid>
				</CustomGrid>
			</main>
		);
	}
}

export default Painel;
