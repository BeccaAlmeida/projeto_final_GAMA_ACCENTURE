import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ButtonSave from './ButtonSave';
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

export default function BasicTextFields() {
    const [{ values, loading }, handleChange, handleSubmit] = useForm();

    const saveActress = () => {
        console.log(values);
    };
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root} id="card">
                <CardContent>
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
                        <Autocomplete
                            id="combo-box-demo1"
                            options={genders}
                            getOptionLabel={(option) => option.gender}
                            renderInput={(params) => <TextField {...params} label="Sexo" variant="outlined" />}
                        />
                        <Autocomplete
                            id="combo-box-demo2"
                            options={workGenres}
                            getOptionLabel={(option) => option.workGenre}
                            renderInput={(params) => <TextField {...params} label="Gênero que atua" variant="outlined" />}
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
                </CardContent>
                <CardActions>
                    <ButtonSave />
                </CardActions>
            </Card>
        </div>
    );
}
const genders = [
    { gender: 'Feminino' },
    { gender: 'Masculino' },
    { gender: 'Outros' },
];
const workGenres = [
    { workGenre: 'Ação' },
    { workGenre: 'Animação' },
    { workGenre: 'Comédia' },
    { workGenre: 'Documentário' },
    { workGenre: 'Fantasia' },
    { workGenre: 'Faroeste-western' },
    { workGenre: 'Ficção-científica' },
    { workGenre: 'Guerra' },
    { workGenre: 'Musical' },
    { workGenre: 'Erótico' },
    { workGenre: 'Romance' },
    { workGenre: 'Suspense' },
    { workGenre: 'Terror' },
    { workGenre: 'Trágedia/Drama' },
];
