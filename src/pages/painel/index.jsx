import React, { Component } from "react";
import CustomGrid from "../../components/Grid";
import { Grid } from "@material-ui/core";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CustomCard from "../../components/Card";

class Painel extends Component {
	getOptions() {
		return {
			chart: {
				type: "spline",
			},
			title: {
				text: "My chart",
			},
			series: [
				{
					data: [1, 2, 1, 4, 3, 6],
				},
			],
		};
	}

	render() {
		return (
			<CustomGrid>
				<Grid lg={6} md={6} xs={12} item>
					<CustomCard>
						<HighchartsReact
							highcharts={Highcharts}
							options={this.getOptions()}
						/>
					</CustomCard>
				</Grid>
				<Grid lg={6} md={6} xs={12} item>
					<CustomCard>
						<HighchartsReact
							highcharts={Highcharts}
							options={this.getOptions()}
						/>
					</CustomCard>
				</Grid>
				<Grid lg={4} md={4} xs={12} item>
					<CustomCard>
						<HighchartsReact
							highcharts={Highcharts}
							options={this.getOptions()}
						/>
					</CustomCard>
				</Grid>
				<Grid lg={8} md={8} xs={12} item>
					<CustomCard>
						<HighchartsReact
							highcharts={Highcharts}
							options={this.getOptions()}
						/>
					</CustomCard>
				</Grid>
			</CustomGrid>
		);
	}
}

export default Painel;
