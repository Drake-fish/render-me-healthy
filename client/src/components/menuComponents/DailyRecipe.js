import React from 'react';

const DailyRecipe = ({ recipe }) => {
	this.renderRecipe = () => {
		if (!recipe) {
			return (
				<div className="empty-recipe">
					<h5>There is no recipe assigned to this day!</h5>
					<a href="/search-recipies">Add Recipe</a>
				</div>
			);
		}
		return (
			<div>
				<img src={recipe ? recipe.image : null} alt="recipe" />
				<span>{recipe ? recipe.title : null}</span>
			</div>
		);
	};
	return <div>{this.renderRecipe()}</div>;
};

export default DailyRecipe;
