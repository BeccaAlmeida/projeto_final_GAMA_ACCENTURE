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

  const saveActress = () => {
    console.log(values);
  };
  const classes = useStyles();

  return (
    <div>
        <h1>Meus Dados</h1>
      <form onSubmit={handleSubmit(saveActress)} className={classes.root} noValidate autoComplete="off">
        <TextField 
            onChange={handleChange}
            className="actress" 
            id="{actress.name}" 
            type="text" 
            label="Ator" 
            placeholder="name Actress" 
            variant="outlined" 
        />
        <TextField 
            onChange={handleChange}
            className="price" 
            id="{actress.price}" 
            type="price" 
            label="Preço" 
            placeholder="price" 
            variant="outlined" 
        />
        <TextField 
            onChange={handleChange}
            className="email" 
            id="{actress.email}" 
            type="email" 
            label="E-mail" 
            placeholder="email" 
            variant="outlined" 
        />
        <TextField 
            onChange={handleChange}
            className="password" 
            id="{actress.password}" 
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
