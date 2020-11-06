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
    getOptionLabel: (option) => option.workGenres,
  };

  const flatProps = {
    options: top100Films.map((option) => option.workGenres),
  };

  const [value, setValue] = React.useState(null);

  return (
    <div style={{ width: 300 }}>
      
      <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => <TextField {...params} label="Gênero da Obra" margin="normal" />}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { workGenres: 'Ação' },
  { workGenres: 'Animação' },
  { workGenres: 'Comédia' },
  { workGenres: 'Documentário' },
  { workGenres: 'Fântasia' },
  { workGenres:  'Faroeste-Western'},
  { workGenres: 'Ficção Cientifíca' },
  { workGenres: 'Guerra' },
  { workGenres: 'Musical' },
  { workGenres: 'Pornôgrafico/Erótico' },
  { workGenres: 'Romance' },
  { workGenres: 'Suspense' },
  { workGenres: 'Terror' },
  { workGenres:  'Trágedia/Drama'},

];
