import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import useForm from '../../hooks/useForm';
import Api from '../../service/api';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
  },
}));

export default function BasicTextFields() {
  const [values, handleChange] = useForm();

  const saveProducer = (event) => {
    console.log(values)
    event.preventDefault();
      Api.post('/producer/create', 
        {
          "name": values.values.nome,
          "user": {
            "login": values.values.login,
            "password": values.values.senha
      }}
      ).then((response) => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error.response)
    });
    console.log(values);
  }
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root} id="card">
        <CardContent>
          <form className={classes.root} onSubmit={saveProducer} autoComplete="off">
            <TextField 
                name="nome"
                onChange={(event) => handleChange (event)}
                className="producer" 
                id="{producer.name}" 
                type="text" 
                label="Produtor" 
                placeholder="name Producer" 
                variant="outlined" 
            />
            <TextField 
                name="login"
                onChange={(event) => handleChange (event)}
                className="login" 
                id="{producer.login}" 
                type="email" 
                label="email" 
                placeholder="E-mail" 
                variant="outlined" 
            />
            <TextField 
                name="senha"
                onChange={(event) => handleChange (event)}
                className="senha" 
                id="{producer.password}" 
                type="password" 
                label="Senha" 
                placeholder="Password" 
                variant="outlined" 
            />
            <ThemeProvider theme={theme}>
            <Button className={classes.root} type="submit" variant="contained" color="primary">
              Salvar
            </Button>
            </ThemeProvider>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
});
