import React, { Component } from 'react';

class RecipeSavingModule extends Component {
	state = { value: '7', confirm: false };
	componentDidMount() {
		this.props.fetchMenu();
	}
	//change the state when the dropdown changes
	handleChange = event => {
		this.setState({ value: event.target.value });
	};
	toggleConfirmation = () => {
		console.log('Toggling confirmation');
		this.setState({ confirm: !this.state.confirm });
	};
	//function that runs when yes button is selected.
	saveRecipe = () => {
		const { recipe } = this.props;
		const recipeObj = {
			label: recipe.label,
			cookTime: recipe.cookTime,
			prepTime: recipe.prepTime,
			steps: recipe.steps,
			serves: recipe.serves,
			category: recipe.category,
			image: recipe.image,
			ingredients: recipe.ingredients
		};
		//only save the recipe don't assign to the menu
		console.log('TRIGGERING RECIPE SAVE HERE!', recipe);
		if (this.state.value > 6) {
			this.props.triggerRecipeSave({
				recipe: recipeObj,
				day: this.state.value
			});
			this.props.toggleSaveModule();
			return;
		}
		//if the day is already assigned a menu item ask for confirmation or add it to the day
		if (this.props.menu[this.state.value]) {
			this.toggleConfirmation();
		} else {
			this.props.triggerRecipeSave({
				recipe: recipeObj,
				day: this.state.value
			});
			this.props.toggleSaveModule();
		}
	};

	updateDay = () => {
		const { recipe } = this.props;
		const recipeObj = {
			label: recipe.label,
			cookTime: recipe.cookTime,
			prepTime: recipe.prepTime,
			steps: recipe.steps,
			serves: recipe.serves,
			category: recipe.category,
			image: recipe.image,
			ingredients: recipe.ingredients
		};

		this.props.triggerRecipeSave({
			recipe: recipeObj,
			day: this.state.value
		});
		this.toggleConfirmation();
		this.props.toggleSaveModule();
	};

	renderContent = () => {
		const { recipe, toggleSaveModule } = this.props;
		if (this.state.confirm) {
			return (
				<div className="confirmation-container">
					<h3 className="confirm-title">
						Hey we see that {this.props.menu[this.state.value].label} is already
						assigned for this day.
					</h3>
					<h3 className="confirm-title">
						Do you want to change it to {this.props.recipe.label}?
					</h3>
					<div className="save-buttons">
						<button className="confirm-button" onClick={this.updateDay}>
							Yes
						</button>
						<button
							className="confirm-button"
							onClick={this.toggleConfirmation}>
							No
						</button>
					</div>
				</div>
			);
		} else {
			return (
				<div className="saving-screen">
					<h4 className="saving-recipe-title">
						Are you sure you would like to save {recipe.label}?
					</h4>
					<select onChange={this.handleChange} value={this.state.value}>
						<option value={0}>Monday</option>
						<option value={1}>Tuesday</option>
						<option value={2}>Wednesday</option>
						<option value={3}>Thursday</option>
						<option value={4}>Friday</option>
						<option value={5}>Saturday</option>
						<option value={6}>Sunday</option>
						<option value={7}>Dont assign to my menu</option>
					</select>
					<div className="save-buttons">
						<button className="confirm-button" onClick={this.saveRecipe}>
							Yes
						</button>
						<button className="confirm-button" onClick={toggleSaveModule}>
							No
						</button>
					</div>
				</div>
			);
		}
	};

	render() {
		return (
			<div className="saving-module">
				<div className="saving-modal" />
				{this.renderContent()}
			</div>
		);
	}
}

export default RecipeSavingModule;
