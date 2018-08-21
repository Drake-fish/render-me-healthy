import React from 'react';

const Ingredient = ({ data }) => {
	this.renderContent = () => {
		if (data) {
			return data.map((ingredient, i) => {
				console.log(ingredient);
				return (
					<p key={i} className="ingredient-text">
						{ingredient.text}
					</p>
				);
			});
		} else {
			return null;
		}
	};
	return <div className="ingredient-container">{this.renderContent()}</div>;
};

export default Ingredient;
