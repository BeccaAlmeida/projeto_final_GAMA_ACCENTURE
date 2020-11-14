import React, { Component } from 'react';
import ApiUser from '../../service/api';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class NewUser extends Component {
    componentDidMount() {
        ApiUser.post('/producer/create', {
            "name": "Nome",
            "user": {
                "login": "login",
                "password": "senha"
            }
        }).then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
        ApiUser.get('/actress/list').then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }
    render() {
        const useStyles = makeStyles((theme) => ({
            root: {
                '& > *': {
                    margin: theme.spacing(1),
                    width: '25ch',
                },
            },
        }));
        const classes = useStyles();
        return (
            <div>
                <h1>Meus dados</h1>
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
                        type="text"
                        label="email"
                        placeholder="E-mail"
                        variant="outlined"
                    />
                    <TextField
                        onChange={handleChange}
                        className="senha"
                        id="{producer.password}"
                        type="text"
                        label="Password"
                        placeholder="Senha"
                        variant="outlined"
                    />
                </form>
                <div>
                    <ThemeProvider theme={theme}>
                        <Button className={classes.root} type="submit" onClick={this.loading} variant="contained" color="primary">
                            Salvar
                        </Button>
                    </ThemeProvider>
                </div>
            </div>
        );
    };
}
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#906cda',
      },
    },
});
export default NewUser;