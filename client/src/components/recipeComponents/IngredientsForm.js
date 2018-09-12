import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { ingredientValues } from './formValues';
import SelectField from './SelectField';
import InputField from './InputField';
import '../../styles/form-styles.css';

class IngredientForm extends Component {
	renderFields() {
		return ingredientValues.map(field => {
			return (
				<Field
					key={field.name}
					label={field.name}
					placeholder={field.placeholder ? field.placeholder : null}
					name={field.name}
					dropdown={field.placeholder ? null : field.options}
					component={field.placeholder ? InputField : SelectField}
				/>
			);
		});
	}
	//keep render functions simple with helper functions!
	render() {
		console.log('what do we have', this.props);
		return (
			<div>
				<form onSubmit={this.props.onSubmit} className="ingredient-form">
					{this.renderFields()}
					<button disabled={!this.props.valid} type="submit">
						Add
					</button>
				</form>
			</div>
		);
	}
}
//values is an object of all the values in our form.
function validate(values) {
	const errors = {};

	ingredientValues.forEach(({ name }) => {
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
	form: 'ingredientForm'
})(IngredientForm);
