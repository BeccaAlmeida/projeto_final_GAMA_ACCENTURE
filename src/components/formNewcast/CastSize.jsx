import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Content from '../base/Content';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 180,
  },
}));

export default function GroupedSelect() {
  const classes = useStyles();

  return (
    <div>    
      <Button style={{marginTop: '25px'}} variant="contained" color="primary" disabled>
        Monte seu Elenco
      </Button>
      <Content>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select" >Diretor</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Continuísta</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Diretor de Fotográfia</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Fotográfo de Cena</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Diretor de produção</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Assistente de Câmera</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Clap loader</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Figurinista</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Guarda-Roupeira</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Técnico de Som</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Cenógrafo</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Cenotécnico</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Roterista</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Argumentista</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Dialogista</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Gas Man</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Pesquisador</InputLabel>
          <Select native defaultValue="" id="diretor">
            <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={10}>4 á 10</option>
          </Select>
        </FormControl>
      </Content>
    </div>
  );
}
