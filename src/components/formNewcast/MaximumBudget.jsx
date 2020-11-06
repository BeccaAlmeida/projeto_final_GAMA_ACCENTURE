/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	content: {
		flexGrow: 1,
		overflow: "auto",
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		maxWidth: "100%",
	},
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
	},
	fixedHeight: {
		height: 120,
	},
}));
export default function Playground() {
  const classes =  useStyles();
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.maximumBudget,
  };

  const flatProps = {
    options: top100Films.map((option) => option.maximumBudget),
  };

  const [value, setValue] = React.useState(null);

  return (
    <div style={{ width: 300 }}>
      
      <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => <TextField {...params} label="Orçamento Máximo" margin="normal" />}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { maximumBudget: 'R$ 0,00 á R$ 10,000.00' },
  { maximumBudget: 'R$ 10,000.00 á R$ 100,000.00' },
  { maximumBudget: 'R$ 100,000.00 á R$ 1,000,000.00' },
  { maximumBudget: 'R$ 1,000,000.00 á R$ 100,000,000.00' },
  
];
