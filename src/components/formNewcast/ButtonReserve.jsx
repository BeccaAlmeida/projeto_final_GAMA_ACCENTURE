import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useForm from '../../hooks/useForm';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const [{loading}] = useForm();
export default function ContainedButtons() {
 const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button className={classes.root} onClick={loading ? "Enviando..." : "Enviar"}  variant="contained" color="primary">
          Salvar
        </Button>
      </ThemeProvider>
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