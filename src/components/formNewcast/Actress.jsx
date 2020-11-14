// *https://www.registers.service.gov.uk/registers/actress/use-the-api*
import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Apiactress from '../../service/api';
import regeneratorRuntime from "regenerator-runtime";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Asynchronous() {
  const [open, setOpen] = React.useState();
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const url =  Apiactress.get('/actress/list').then((response) => {
        console.log(response.data);
        this.setOptions({options: response.data});
      });

      const response = await fetch(url);
      await sleep(1e3); // For demo purposes.
      const actress = await response.json();
      console.log(response)

      if (active) {
        setOptions(Object.keys(actress).map((key) => actress[key].name[0]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo1"
      style={{ width: 300 }, {marginBottom: 10}, {marginRight: 10}}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.actress === value.actress}
      getOptionLabel={(option) => option.actress}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Ator"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
