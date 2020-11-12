import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

export default function Playground() {
	const defaultProps = {
		options: Budgets,
		getOptionLabel: (option) => option.maximumBudget,
	};

	const flatProps = {
		options: Budgets.map((option) => option.maximumBudget),
	};

	const [value, setValue] = React.useState(null);

	return (
		<div className="Budgets">
			<Autocomplete
				{...defaultProps}
				id="auto-complete2"
				autoComplete
				includeInputInList
				renderInput={(params) => (
					<TextField
						{...params}
						label="Orçamento Máximo"
						margin="normal"
					/>
				)}
			/>
		</div>
	);
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const Budgets = [
	{ maximumBudget: "R$ 0,00 á R$ 10,000.00" },
	{ maximumBudget: "R$ 10,000.00 á R$ 100,000.00" },
	{ maximumBudget: "R$ 100,000.00 á R$ 1,000,000.00" },
	{ maximumBudget: "R$ 1,000,000.00 á R$ 100,000,000.00" },
];
