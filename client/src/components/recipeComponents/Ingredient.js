import React from 'react';

export default ({ removeIngredient, ingredient, id }) => {
	return (
		<li>
			<span>
				{ingredient.amount} {ingredient.measure} | {ingredient.commonName} |{' '}
				{ingredient.category}
			</span>
			<span onClick={() => removeIngredient(ingredient.id)}>Remove</span>
		</li>
	);
};
