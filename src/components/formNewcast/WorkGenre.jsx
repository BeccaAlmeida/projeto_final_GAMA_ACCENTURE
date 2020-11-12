/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";

export default function Playground() {
  
  const defaultProps = {
    options: genres,
    getOptionLabel: (option) => option.workGenres,
  };

  const flatProps = {
    options: genres.map((option) => option.workGenres),
  };

  const [value, setValue] = React.useState(null);

  return (
    <div className="Genres" >
        <Autocomplete
          {...defaultProps}
          id="auto-complete1"
          autoComplete
          includeInputInList
          renderInput={(params) => <TextField {...params} label="Gênero da Obra" margin="normal" />}
        />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const genres = [
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
