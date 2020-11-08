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
 const classes = useStyles();
  return (
    <div>
      <ThemeProvider className={classes.root} theme={theme}>
        <Button style={{ marginTop: '10px'}} variant="contained" color="primary">
          Buscar elenco
        </Button>
      </ThemeProvider>
    </div>
  );
}
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#906cda',
    },
  },
});