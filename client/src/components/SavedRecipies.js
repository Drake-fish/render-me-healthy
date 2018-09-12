import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSavedRecipies, deleteSavedRecipe } from '../actions';
import HeroImage from './HeroImage';
import Recipe from './recipeComponents/Recipe';
import Loader from './Loader';

import '../styles/saved-recipies.css';

class SavedRecipies extends Component {
	componentDidMount() {
		this.props.getSavedRecipies();
	}
	renderRecipies = () => {
		return this.props.recipies.map(recipe => {
			return (
				<Recipe
					key={recipe._id}
					deleteRecipe={this.props.deleteSavedRecipe}
					recipe={recipe}
				/>
			);
		});
	};
	render() {
		console.log(this.props.deleteSavedRecipe);
		return (
			<div className="saved-recipies-page">
				<HeroImage
					image="https://images.unsplash.com/photo-1495461199391-8c39ab674295?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7baeff72dbf865f4ca4267cbe433b4cb&auto=format&fit=crop&w=2100&q=80"
					title="Saved Recipies"
				/>
				{this.props.recipies ? this.renderRecipies() : <Loader />}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		recipies: state.recipies.saved
	};
}
export default connect(mapStateToProps, {
	getSavedRecipies,
	deleteSavedRecipe
})(SavedRecipies);
