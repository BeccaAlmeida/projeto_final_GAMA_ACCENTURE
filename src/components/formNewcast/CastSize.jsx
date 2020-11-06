import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [director, setDirector] = React.useState('');
  const [continuista, setContinuista] = React.useState('');
 /* const [diretorFotografia, setDiretorFotografia] = React.useState('');
  const [fotografoCena, setFotografoCena] = React.useState('');
  const [diretorProducao, setDiretorProducao] = React.useState('');
  const [assitenteCamera, setAssitenteCamera] = React.useState('');
  const [clapLoader, setClapLoader] = React.useState('');
  const [figurinista, setFigurinista] = React.useState('');
  const [guardaRoupeira, setGuardaRoupeira] = React.useState('');
  const [tecnicoSom, setTecnicoSom] = React.useState('');
  const [microfonista, setMicrofonista] = React.useState('');
  const [cenografo, setCenografo] = React.useState('');
  const [cenotecnico, setCenotecnico] = React.useState('');
  const [roterista, setRoterista] = React.useState('');
  const [argumentista, setArgumentista] = React.useState('');
  const [dialogista, setdialogista] = React.useState('');
  const [gagsMan, setGagsMan] = React.useState('');
  const [pesquisador, setPesquisador] = React.useState('');
  const [desenhoAnimado, setDesenhoAnimado] = React.useState('');
  const [assistenteDirecao, setAssistenteDirecao] = React.useState('');
  const [operadorCamera, setOperadorCamera] = React.useState('');
  const [operadorSteadyCam, setOperadorSteadyCam] = React.useState('');
  const [assistenteProdutorExec, setAssistenteProdutorExec] = React.useState('');
  const [assistenteProd, setAssistenteProd] = React.useState('');
  const [chefeEletricista, setChefeEletricista] = React.useState('');
  const [eletricista, setEletricista] = React.useState('');
  const [geradorista, setGeradorista] = React.useState('');
  const [chefeMaquinista, setChefeMaquinista] = React.useState('');
  const [maquinista, setMaquinista] = React.useState('');
  const [operadorVideoAssistent, setoperadorVideoAssistent] = React.useState('');
  const [contrarregra, setContrregra] = React.useState('');
  const [maquiador, setMaquiador] = React.useState('');
  const [editor, setEditor] = React.useState('');
  const [trilheiro, setTrilheiro] = React.useState('');
  const [efeitosSpeciais, setEfeitosSpeciais] = React.useState('');
  const [laboratorista, setLaboratorista] = React.useState('');
  const [maracdorLuz, setDialogista] = React.useState('');
  const [montadorNegativo, setMontadorNegativo] = React.useState('');
  const [open, setOpen] = React.useState(false);*/

  const handleChange = (event) => {
    setDirector(event.target.value);
    setContinuista(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Monte seu elenco
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Diretor</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={director}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={10}>mais de três</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">continuista</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={continuista}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={10}>mais de três</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
