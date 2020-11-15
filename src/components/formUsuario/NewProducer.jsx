import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ButtonSave from './ButtonSave';
import Button from '@material-ui/core/Button';
import useForm from '../../hooks/useForm';

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

const [{ values, loading }, handleChange, handleSubmit] = useForm();
export default function BasicTextFields() {

  /*const saveProducer = () => {
      Api.post('/producer/create', 
        {
          "name": "Nome",
          "user": {
            "login": "login",
            "password": "senha"
      }}
      ).then((response) => {
        console.log(response.data)
      })
    console.log(values);
  };*/

  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root} id="card">
        <CardContent>
          <form onSubmit={() => handleSubmit(saveProducer)} className={classes.root} autoComplete="off">
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
        </CardContent>
        <CardActions>
            <ThemeProvider theme={theme}>
              <Button className={classes.root} onClick={loading ? "Enviando..." : "Enviar"}  variant="contained" color="primary">
                Salvar
              </Button>
          </ThemeProvider>
        </CardActions>
      </Card>
    </div>
  );
}
