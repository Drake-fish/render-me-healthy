const keys = require('../config/keys');
const fetch = require('node-fetch');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Recipe = mongoose.model('recipies');
const Menu = mongoose.model('menus');
const Ingredient = mongoose.model('ingredients');

module.exports = app => {
	app.post('/recipies', async (req, res) => {
		console.log(req.body);
		const { query } = req.body;
		// try {
		//   const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${keys.recipieAppId}&app_key=${keys.recipieKey}`);
		//   res.send(response);

		// } catch (err) {
		//     res.status(422).send(err);
		// }
		fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${
				keys.recipieAppId
			}&app_key=${keys.recipieKey}`
		)
			.then(res => res.json())
			.then(json => res.send(json));
	});

	//save recipe for a User
	app.post('/recipies/save', requireLogin, async (req, res) => {
		console.log('RECIPE AT /recipe/save here ', req.body);
		const { title, image, ingredients, link } = req.body;
		const recipe = new Recipe({
			title: title,
			image: image,
			ingredients: ingredients,
			link: link,
			_user: req.user.id
		});
		const existingRecipe = await Recipe.findOne({
			_user: req.user.id,
			image
		});
		if (existingRecipe) {
			res.send(null);
		} else {
			const recipeResponse = await recipe.save();
			res.send(recipeResponse);
		}
	});

	//save ingridence for that recipe
	app.post('/ingredient/save', requireLogin, async (req, res) => {});
	//create a new menu for a user.

	//remove a recipe.
	app.delete('/recipe/delete', requireLogin, async (req, res) => {
		const { id } = req.body;

		Recipe.findByIdAndRemove(id, (err, recipe) => {
			if (err) return res.status(500).send(err);
			const response = {
				message: 'Recipe successfully removed'
			};
			return res.status(200).send(response);
		});
	});

	app.delete('/menu/day/delete', requireLogin, async (req, res) => {});

	app.delete('/ingredient/delete', requireLogin, async (req, res) => {});
};
