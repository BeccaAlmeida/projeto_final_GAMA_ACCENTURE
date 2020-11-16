import { useState } from "react";

const castForm = (callback) => {
	const [values, setValues] = useState({});

	const handleChange = (key, data) => {
		let auxValues = Object.assign({}, values);
		auxValues[key] = data;

		setValues(auxValues);
	};

	const handleSubmit = (callback) => (event) => {
		event.preventDefault();
		callback();
	};
	return [values, handleChange, handleSubmit];
};
export default castForm;
