import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import api from "../../service/api";
import castForm from "../../hooks/castForm";

export default function Asynchronous() {
	const [open, setOpen] = React.useState(false);
	const [options, setOptions] = React.useState([]);
	const loading = open && options.length === 0;
	const [values, handleChange] = castForm();

	useEffect(() => {
		if (!loading) {
			return undefined;
		}

		(async () => {
			const response = await api.get("/producer/2");
			setOptions([response.data]);
		})();
	}, [loading]);

	useEffect(() => {
		if (!open) {
			setOptions([]);
		}
	}, [open]);

	return (
		<div className="producer">
			<Autocomplete
				open={open}
				onOpen={() => setOpen(true)}
				onClose={() => setOpen(false)}
				getOptionSelected={(option, value) => option.id === value.id}
				getOptionLabel={(option) => option.name}
				options={options}
				loading={loading}
				onInputChange={(event, newValue) => {
					if (newValue) {
						var selected = options.find(
							(item) => item.name === newValue
						);

						if (selected) {
							handleChange("produtor", selected.id);
						}
					}
				}}
				renderInput={(params) => (
					<TextField
						{...params}
						label="Produtor/Produtora"
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
	);
}
