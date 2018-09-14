import React from 'react';

const Recipe = ({
	recipe,
	savingModule,
	deleteRecipe,
	showDetails,
	toggleDetails
}) => {
	this.renderContent = () => {
		return (
			<div>
				{showDetails ? (
					<div className="recipe-container">
						<div className="recipe-image-container">
							<img onClick={toggleDetails} src={recipe.image} alt="recipe" />
							{savingModule ? (
								<i
									onClick={() => savingModule(recipe)}
									className="fas fa-heart"
								/>
							) : (
								<i
									className="fas fa-trash-alt"
									onClick={() => deleteRecipe({ image: recipe.image })}
								/>
							)}
						</div>
						<div className="recipe-preview-container">
							<h4 className="recipe-name">{recipe.label}</h4>
							<p className="recipe-description">{recipe.description}</p>
							<p>
								Serves:{recipe.serves}
								<span className="total-time">Cook Time:{recipe.cookTime}</span>
							</p>
						</div>
					</div>
				) : (
					<div className="recipe-container detail-view">
						<div className="recipe-image-container">
							<img onClick={toggleDetails} src={recipe.image} alt="recipe" />
							{savingModule ? (
								<i
									onClick={() => savingModule(recipe)}
									className="fas fa-heart"
								/>
							) : (
								<i
									className="fas fa-trash-alt"
									onClick={() => deleteRecipe({ image: recipe.image })}
								/>
							)}
						</div>
						<div className="recipe-preview-container">
							<h4 className="recipe-name">{recipe.label}</h4>
							<p className="recipe-description-details">{recipe.description}</p>
							<p>
								Serves:{recipe.serves}
								<span className="total-time">Cook Time:{recipe.cookTime}</span>
							</p>
						</div>
						<ul className="recipe-detail-menu">
							<li>Main</li>
							<li>Ingredients</li>
							<li>Recipe Steps</li>
						</ul>
					</div>
				)}
			</div>
		);
	};
	return <div>{this.renderContent()}</div>;
};

export default Recipe;
