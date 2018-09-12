import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { formValues } from './formValues';
import InputField from './InputField';

class MainForm extends Component {
	renderFields() {
		return formValues.map(field => {
			return (
				<Field
					key={field.name}
					label={field.name}
					type="text"
					placeholder={field.placeholder}
					name={field.name}
					component={InputField}
				/>
			);
		});
	}
	//keep render functions simple with helper functions!
	render() {
		return (
			<div>
				<form className="main-form">{this.renderFields()}</form>
			</div>
		);
	}
}
//values is an object of all the values in our form.
function validate(values) {
	const errors = {};

	formValues.forEach(({ name }) => {
		console.log('validating ', name, errors);
		//values[name] figures out a dynamic property like values.email, or values.body
		if (!values[name]) {
			errors[name] = 'You must provide a value!';
		}
	});

	return errors;
}
export default reduxForm({
	validate,
	form: 'mainForm'
})(MainForm);
