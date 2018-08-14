import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipies } from '../actions';
import HeroImage from './HeroImage';
import RecipeSearch from './recipeComponents/RecipeSearch';
import Recipe from './recipeComponents/Recipe';

import '../styles/recipies.css';

class Recipies extends Component {
	componentDidMount() {
		this.props.fetchRecipies({ query: 'chicken' });
	}
	fetchRecipies = query => {
		console.log('Fetching recipies', query);
		this.props.fetchRecipies(query);
	};
	renderRecipies() {
		return this.props.recipies.hits.map(recipe => {
			return <Recipe recipe={recipe.recipe} />;
		});
	}
	render() {
		return (
			<div className="recipie-page">
				<HeroImage image="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1d992c355cbbe3f02ddc5f762f2ada73&auto=format&fit=crop&w=1100&q=80" />
				<RecipeSearch fetchRecipies={this.fetchRecipies} />
				{this.props.recipies ? this.renderRecipies() : null}
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log('state redux', state);
	return {
		recipies: state.recipies
	};
}
export default connect(mapStateToProps, {
	fetchRecipies
})(Recipies);
