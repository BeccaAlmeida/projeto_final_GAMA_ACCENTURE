import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  
  root: {
    '& > *': {
      margin: theme.spacing(3),
    },
  },
}));

export default function ContainedButtons() {

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Buscar elenco
      </Button>
    </ThemeProvider>
  );
}
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f50b5',
    },
  },
});