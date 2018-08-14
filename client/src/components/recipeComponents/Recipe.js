import React from 'react';

const Recipe = ({ recipe }) => {
	console.log(recipe);
	return (
		<div className="recipe-container">
			<div className="recipe-image-container">
				<img src={recipe.image} />
			</div>
			<div className="recipe-info-container">
				<h3 className="recipe-name">{recipe.label}</h3>
				<i className="fa fa-heart" aria-hidden="true" />
			</div>
		</div>
	);
};

export default Recipe;
