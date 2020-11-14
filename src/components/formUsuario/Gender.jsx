/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={genders}
      getOptionLabel={(option) => option.gender}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const genders = [
  { gender: 'The Shawshank Redemption' },
  { gender: 'The Godfather'},
  { gender: 'The Godfather: Part II' },
  { gender: 'The Dark Knight' },
  { gender: '12 Angry Men' },
  { gender: "Schindler's List" },
  { gender: 'Pulp Fiction' },
  { gender: 'The Lord of the Rings: The Return of the King' },
  { gender: 'The Good, the Bad and the Ugly' },
  { gender: 'Fight Club' },
  { gender: 'The Lord of the Rings: The Fellowship of the Ring' },
  { gender: 'Star Wars: Episode V - The Empire Strikes Back' },
  { gender: 'Forrest Gump' },
];
