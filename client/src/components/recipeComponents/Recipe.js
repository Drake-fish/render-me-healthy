import React from 'react';

const Recipe = ({ recipe, savingModule }) => {
	return (
		<div className="recipe-container">
			<div className="recipe-image-container">
				<img src={recipe.image} alt="recipe" />
			</div>
			<div className="recipe-info-container">
				<h3 className="recipe-name">{recipe.label}</h3>
				{savingModule ? (
					<span onClick={() => savingModule(recipe)}>SAVE</span>
				) : null}
			</div>
		</div>
	);
};

export default Recipe;
