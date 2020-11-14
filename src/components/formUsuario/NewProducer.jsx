import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonSave from './ButtonSave';
import Button from '@material-ui/core/Button';
import useForm from '../../hooks/useForm';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  const saveProducer = () => {
    console.log(values);
  };
  const classes = useStyles();

  return (
    <div>
        <h1>Meus Dados</h1>
      <form onSubmit={handleSubmit(saveProducer)} className={classes.root} autoComplete="off">
        <TextField 
            onChange={handleChange}
            className="producer" 
            id="{producer.id}" 
            type="text" 
            label="Produtor" 
            placeholder="name Producer" 
            variant="outlined" 
        />
        <TextField 
            onChange={handleChange}
            className="login" 
            id="{producer.login}" 
            type="email" 
            label="email" 
            placeholder="E-mail" 
            variant="outlined" 
        />
        <TextField 
            onChange={handleChange}
            className="senha" 
            id="{producer.password}" 
            type="password" 
            label="Senha" 
            placeholder="Password" 
            variant="outlined" 
        />
      </form>
      <div>
        <ButtonSave />
      </div>
    </div>
  );
}
