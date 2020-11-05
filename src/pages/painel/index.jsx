import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

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
			<HighchartsReact
				highcharts={Highcharts}
				options={this.getOptions()}
			/>
		);
	}
}

export default Painel;
