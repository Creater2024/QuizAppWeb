import React, {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

//props used :-  1)label="Subject"   2)options={topFilms}  3)onChange={handleChange}
export default function CustomSelect(props) {
	const [open, setOpen] = useState(false);
	const [options, setOptions] = useState([]);
	const [loading, setLoading] = useState(true);
	useState(() => {
		if (props.options != undefined && props.options != null) {
			setOptions(props.options);
			setLoading(false);
		}
	}, [props.options]);
	const handleChange = (event, value) => {
		if (props.onChange) {
			props.onChange(value);
		}
	};
	useEffect(() => {
		setOptions(props.options);
	}, [props.options]);
	return (
		<Autocomplete
			// id=""
			// sx={{ width: 300 }}
			open={open}
			onOpen={() => {
				setOpen(true);
			}}
			onClose={() => {
				setOpen(false);
			}}
			isOptionEqualToValue={(option, value) => option.name === value.name}
			getOptionLabel={(option) => option.name}
			options={options}
			loading={loading}
			onChange={handleChange}
			value={props.selectedOption}
			renderInput={(params) => (
				<TextField
					{...params}
					label={props.label}
					InputProps={{
						...params.InputProps,
						endAdornment: (
							<React.Fragment>
								{loading ? (
									<CircularProgress color="inherit" size={20} />
								) : null}
								{params.InputProps.endAdornment}
							</React.Fragment>
						),
					}}
				/>
			)}
		/>
	);
}
