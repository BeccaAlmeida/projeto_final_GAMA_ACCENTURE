import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonSave from './ButtonSave';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField className="producer" id="{producer.id}" type="text" label="Produtor" placeholder="name Producer" variant="outlined" />
        <TextField className="login" id="{producer.login}" type="email" label="email" placeholder="E-mail" variant="outlined" />
        <TextField className="senha" id="{producer.password}" type="password" label="Produtor" placeholder="Senha" variant="outlined" />
      </form>
      <div>
        <ButtonSave />
      </div>
    </div>
  );
}
