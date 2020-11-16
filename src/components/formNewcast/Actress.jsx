import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import useForm from '../../hooks/useForm';
import Api from "../../service/api";
import regeneratorRuntime from "regenerator-runtime";

export default function Asynchronous() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
    const [values, handleChange] = useForm();

    useEffect(() => {
        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await Api.get("/actress/list");
            setOptions([response.data]);
        })();
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <div className="listActress">
            <div className="actr">
                <Autocomplete
                    name="actress"
                    onInputChange={(event, newValue) => {
                        var evento = {
                            target: { name: "actress", value: newValue }
                        }
                        handleChange(evento)
                    }}
                    style={{ width: 300 }}
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    getOptionSelected={(option, value) => option.id === value.id}
                    getOptionLabel={(option) => option.name}
                    options={options}
                    loading={loading}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Ator/Atriz"
                            variant="outlined"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {loading ? (
                                            <CircularProgress
                                                color="inherit"
                                                size={20}
                                            />
                                        ) : null}
                                        {params.InputProps.endAdornment}
                                    </React.Fragment>
                                ),
                            }}
                        />
                    )}
                />
            </div>		
		</div >
	);
}
