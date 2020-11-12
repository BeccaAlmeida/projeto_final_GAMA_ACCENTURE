
import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Content from '../layout/Content';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
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
                <option quantprodexc={1}>1</option>
                <option quantprodexc={2}>2</option>
                <option quantprodexc={3}>3</option>
                <option quantprodexc={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Gerente de Locações</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numbergerlocacoes={1}>1</option>
                <option numbergerlocacoes={2}>2</option>
                <option numbergerlocacoes={3}>3</option>
                <option numbergerlocacoes={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Diretor de Produção</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberdirprod={1}>1</option>
                <option numberdirprod={2}>2</option>
                <option numberdirprod={3}>3</option>
                <option numberdirprod={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Produtor</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberprodutor={1}>1</option>
                <option numberprodutor={2}>2</option>
                <option numberprodutor={3}>3</option>
                <option numberprodutor={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Designer de Produção</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberdesprod={1}>1</option>
                <option numberdesprod={2}>2</option>
                <option numberdesprod={3}>3</option>
                <option numberdesprod={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Sonoplasta</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numbersonoplasta={1}>1</option>
                <option numbersonoplasta={2}>2</option>
                <option numbersonoplasta={3}>3</option>
                <option numbersonoplasta={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Departamento de Arte</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberderparte={1}>1</option>
                <option numberderparte={2}>2</option>
                <option numberderparte={3}>3</option>
                <option numberderparte={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Diretor de Arte</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberdirarte={1}>1</option>
                <option numberdirarte={2}>2</option>
                <option numberdirarte={3}>3</option>
                <option numberdirarte={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Diretor de Elenco</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberdirelenco={1}>1</option>
                <option numberdirelenco={2}>2</option>
                <option numberdirelenco={3}>3</option>
                <option numberdirelenco={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Storyboader</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberstoryboarder={1}>1</option>
                <option numberstoryboarder={2}>2</option>
                <option numberstoryboarder={3}>3</option>
                <option numberstoryboarder={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Figurinista</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberfigurinista={1}>1</option>
                <option numberfigurinista={2}>2</option>
                <option numberfigurinista={3}>3</option>
                <option numberfigurinista={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Departamento de Som</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberdersom={1}>1</option>
                <option numberdersom={2}>2</option>
                <option numberdersom={3}>3</option>
                <option numberdersom={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Maquiador</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numbermaquiador={1}>1</option>
                <option numbermaquiador={2}>2</option>
                <option numbermaquiador={3}>3</option>
                <option numbermaquiador={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Diretor de Fotografia</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberdirfoto={1}>1</option>
                <option numberdirfoto={2}>2</option>
                <option numberdirfoto={3}>3</option>
                <option numberdirfoto={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Operador de Câmera</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberopcamera={1}>1</option>
                <option numberopcamera={2}>2</option>
                <option numberopcamera={3}>3</option>
                <option numberopcamera={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Maquinista/Grip</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numbermaquinista={1}>1</option>
                <option numbermaquinista={2}>2</option>
                <option numbermaquinista={3}>3</option>
                <option numbermaquinista={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Assistente de Direção</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberassisdirecao={1}>1</option>
                <option numberassisdirecao={2}>2</option>
                <option numberassisdirecao={3}>3</option>
                <option numberassisdirecao={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Fotográfo de Still</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberfotografo={1}>1</option>
                <option numberfotografo={2}>2</option>
                <option numberfotografo={3}>3</option>
                <option numberfotografo={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Decorador de Set</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberdecorador={1}>1</option>
                <option numberdecorador={2}>2</option>
                <option numberdecorador={3}>3</option>
                <option numberdecorador={10}>4 á 10</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Ator/Atriz</InputLabel>
            <Select native defaultValue="" id="diretor">
              <option aria-label="None" value="" />
                <option numberator={1}>1</option>
                <option numberator={2}>2</option>
                <option numberator={3}>3</option>
                <option numberator={10}>4 á 10</option>
            </Select>
          </FormControl>
        </div>
      </Content>
    </div>
  );
}
