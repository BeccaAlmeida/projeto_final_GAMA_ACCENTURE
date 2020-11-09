import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Content from '../layout/Content';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 180,
  },
}));

export default function GroupedSelect(props) {
  const classes = useStyles();

  return (
    <div className="Button">    
      <Button variant="contained" color="primary" disabled>
        <span className="Title">Monte seu Elenco</span>
      </Button>
      <Content>
        <div className="Card" style={{marginTop: '10px'}}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select" >Produtor Executivo</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberProdExecutivo={1}>1</option>
                <option numberProdExecutivo={2}>2</option>
                <option numberProdExecutivo={3}>3</option>
                <option numberProdExecutivo={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Gerente de Locações</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberGerLocacoes={1}>1</option>
                <option numberGerLocacoes={2}>2</option>
                <option numberGerLocacoes={3}>3</option>
                <option numberGerLocacoes={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Diretor de Produção</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberDirProd={1}>1</option>
                <option numberDirProd={2}>2</option>
                <option numberDirProd={3}>3</option>
                <option numberDirProd={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Produtor</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberProdutor={1}>1</option>
                <option numberProdutor={2}>2</option>
                <option numberProdutor={3}>3</option>
                <option numberProdutor={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Designer de Produção</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberDesProd={1}>1</option>
                <option numberDesProd={2}>2</option>
                <option numberDesProd={3}>3</option>
                <option numberDesProd={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Sonoplasta</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberSonoplasta={1}>1</option>
                <option numberSonoplasta={2}>2</option>
                <option numberSonoplasta={3}>3</option>
                <option numberSonoplasta={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Departamento de Arte</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberDerArte={1}>1</option>
                <option numberDerArte={2}>2</option>
                <option numberDerArte={3}>3</option>
                <option numberDerArte={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Diretor de Arte</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberDirArte={1}>1</option>
                <option numberDirArte={2}>2</option>
                <option numberDirArte={3}>3</option>
                <option numberDirArte={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Diretor de Elenco</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberDirElenco={1}>1</option>
                <option numberDirElenco={2}>2</option>
                <option numberDirElenco={3}>3</option>
                <option numberDirElenco={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Storyboader</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberStoryboarder={1}>1</option>
                <option numberStoryboarder={2}>2</option>
                <option numberStoryboarder={3}>3</option>
                <option numberStoryboarder={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Figurinista</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberFigurinista={1}>1</option>
                <option numberFigurinista={2}>2</option>
                <option numberFigurinista={3}>3</option>
                <option numberFigurinista={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Departamento de Som</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberDerSom={1}>1</option>
                <option numberDerSom={2}>2</option>
                <option numberDerSom={3}>3</option>
                <option numberDerSom={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Maquiador</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberMaquiador={1}>1</option>
                <option numberMaquiador={2}>2</option>
                <option numberMaquiador={3}>3</option>
                <option numberMaquiador={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Diretor de Fotografia</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberDirFoto={1}>1</option>
                <option numberDirFoto={2}>2</option>
                <option numberDirFoto={3}>3</option>
                <option numberDirFoto={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Operador de Câmera</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberOpCamera={1}>1</option>
                <option numberOpCamera={2}>2</option>
                <option numberOpCamera={3}>3</option>
                <option numberOpCamera={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Maquinista/Grip</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberMaquinista={1}>1</option>
                <option numberMaquinista={2}>2</option>
                <option numberMaquinista={3}>3</option>
                <option numberMaquinista={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Assistente de Direção</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberAssDirecao={1}>1</option>
                <option numberAssDirecao={2}>2</option>
                <option numberAssDirecao={3}>3</option>
                <option numberAssDirecao={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Fotográfo de Still</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberFotografo={1}>1</option>
                <option numberFotografo={2}>2</option>
                <option numberFotografo={3}>3</option>
                <option numberFotografo={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Decorador de Set</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberDecorador={1}>1</option>
                <option numberDecorador={2}>2</option>
                <option numberDecorador={3}>3</option>
                <option numberDecorador={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Ator/Atriz</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberAtor={1}>1</option>
                <option numberAtor={2}>2</option>
                <option numberAtor={3}>3</option>
                <option numberAtor={10}>4 á 10</option>
            </Select>
          </FormControl>
        </div>
      </Content>
    </div>
  );
}
