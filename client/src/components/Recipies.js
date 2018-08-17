import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipies, fetchMenu, triggerRecipeSave } from '../actions';
import HeroImage from './HeroImage';
import RecipeSearch from './recipeComponents/RecipeSearch';
import Recipe from './recipeComponents/Recipe';
import RecipeSavingModule from './recipeComponents/RecipeSavingModule';

import '../styles/recipies.css';

class Recipies extends Component {
	state = { saving: false, recipe: null };
	componentDidMount() {
		this.props.fetchRecipies({ query: 'chicken' });
	}
	fetchRecipies = query => {
		console.log('Fetching recipies', query);
		this.props.fetchRecipies(query);
	};
	toggleSaveModule = recipe => {
		console.log('Toggling Save module', recipe);
		this.setState({ saving: !this.state.saving, recipe });
	};
	renderRecipies() {
		return this.props.recipies.hits.map(recipe => {
			return (
				<Recipe savingModule={this.toggleSaveModule} recipe={recipe.recipe} />
			);
		});
	}
	render() {
		console.log('THIS IS THE MENU THAT WAS RETRIEVED', this.props.menu);
		return (
			<div className="recipie-page">
				<HeroImage
					image="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1d992c355cbbe3f02ddc5f762f2ada73&auto=format&fit=crop&w=1100&q=80"
					title="Recipies"
				/>
				<RecipeSearch fetchRecipies={this.fetchRecipies} />
				{this.state.saving ? (
					<RecipeSavingModule
						recipe={this.state.recipe}
						toggleSaveModule={this.toggleSaveModule}
						triggerRecipeSave={this.props.triggerRecipeSave}
						fetchMenu={this.props.fetchMenu}
						menu={this.props.menu}
					/>
				) : null}
				{this.props.recipies ? this.renderRecipies() : null}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		recipies: state.recipies,
		menu: state.menu.menu
	};
}
export default connect(mapStateToProps, {
	fetchRecipies,
	fetchMenu,
	triggerRecipeSave
})(Recipies);
