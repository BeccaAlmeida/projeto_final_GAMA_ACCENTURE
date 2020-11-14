import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SelectInput from '@material-ui/core/Select/SelectInput';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ComposedTextField() {
  const [name, setName] = React.useState('Composed TextField');
  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
  };
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <input type="text"/>Name:
      <SelectInput>
        Emissora
      </SelectInput>
    </form>
  );
}
