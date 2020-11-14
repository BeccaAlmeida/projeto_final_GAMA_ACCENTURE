import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
    width: 200,
  },
}));

export default () => {
 const [{ values, loading }, handleChange, handleSubmit] = useForm();
  const classes = useStyles();
  
  const enviarData = () => {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(enviarData)} className={classes.container} noValidate>
      <TextField
        id="date"
        label="Inicio das Gravações"
        type="date"
        onChange={handleChange}
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
