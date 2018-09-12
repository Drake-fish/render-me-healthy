import React, { Component } from 'react';
import { formValues, ingredientValues } from './formValues';
import { saveDbRecipe } from '../../actions';
import Ingredient from './Ingredient';
import { connect } from 'react-redux';
import '../../styles/form-styles.css';

class AddRecipeModule extends Component {
	state = {
		title: '',
		measure: '',
		image: '',
		commonName: '',
		amount: '',
		category: '',
		prepTime: '',
		cookTime: '',
		recipeCat: '',
		ingredientList: [],
		recipeSteps: [],
		step: '',
		error: false
	};
	//update the state of each field
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	//add an ingredient to the recipe
	addIngredient = e => {
		const {
			commonName,
			amount,
			measure,
			category,
			ingredientList
		} = this.state;
		e.preventDefault();
		if (commonName && amount && measure && category) {
			ingredientList.push({
				commonName,
				amount,
				measure,
				category,
				id: Math.random()
			});
			this.setState({ commonName: '', amount: '', measure: '', category: '' });
		} else {
			console.log('something not filled out');
		}
	};

	//add a step to the recipe
	addStep = e => {
		e.preventDefault();
		this.state.recipeSteps.push(this.state.step);
		this.setState({ step: '' });
	};
	//render the form based on whether the form field is an input or a select
	renderForm = value => {
		return value.map(value => {
			if (value.placeholder) {
				return (
					<input
						key={value.name}
						type="text"
						value={this.state[value.name]}
						placeholder={value.placeholder}
						name={value.name}
						onChange={this.handleChange}
					/>
				);
			}
			return (
				<React.Fragment key={value.name}>
					<label htmlFor={value.name}>{value.name}</label>
					<select
						name={value.name}
						onChange={this.handleChange}
						value={this.state[value.name]}>
						<option />
						{value.options.map(option => {
							return (
								<option key={option.value} value={option.value}>
									{option.option}
								</option>
							);
						})}
					</select>
				</React.Fragment>
			);
		});
	};
	//removal functionality
	removeIngredient = id => {
		let list = this.state.ingredientList.filter(value => {
			if (value.id !== id) {
				return value;
			}
		});
		this.setState({ ingredientList: list });
	};
	//render ingredients to the list
	renderIngredients = () => {
		return this.state.ingredientList.map(value => {
			return (
				<Ingredient
					removeIngredient={this.removeIngredient}
					key={value.id}
					ingredient={value}
				/>
			);
		});
	};
	//submit a newly created recipe
	submitRecipe = () => {
		const {
			ingredientList,
			step,
			title,
			image,
			prepTime,
			cookTime,
			recipeSteps,
			recipeCat
		} = this.state;
		this.props.saveDbRecipe({
			label: title,
			prepTime,
			image,
			cookTime,
			category: recipeCat,
			steps: recipeSteps,
			ingredients: ingredientList
		});
		this.setState({
			title: '',
			prepTime: '',
			image: '',
			cookTime: '',
			recipeCat: '',
			recipeSteps: [],
			ingredientList: []
		});
	};

	render() {
		const {
			commonName,
			amount,
			measure,
			category,
			ingredientList,
			step,
			title,
			recipeCat,
			image,
			prepTime,
			cookTime,
			recipeSteps
		} = this.state;
		return (
			<div className="save-db-recipe-module">
				<h3>Add Recipe</h3>
				<form>{this.renderForm(formValues)}</form>
				<h3>Ingredients</h3>
				<form onSubmit={this.addIngredient} className="ingredients">
					{this.renderForm(ingredientValues)}
					<button
						disabled={!commonName || !amount || !measure || !category}
						type="submit">
						Add
					</button>
				</form>
				<ul>{this.renderIngredients()}</ul>
				<form />
				<h3>Recipe Steps</h3>
				<form onSubmit={this.addStep}>
					<input
						type="text"
						name="step"
						value={step}
						placeholder="Enter a Recipe Step"
						onChange={this.handleChange}
					/>
					<button disabled={!step} type="submit">
						Add
					</button>
				</form>
				<button
					disabled={
						!title ||
						!image ||
						!prepTime ||
						!cookTime ||
						!recipeCat ||
						!ingredientList.length > 0 ||
						!recipeSteps.length > 0
					}
					type="submit"
					onClick={this.submitRecipe}>
					Add Recipe
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps, { saveDbRecipe })(AddRecipeModule);
