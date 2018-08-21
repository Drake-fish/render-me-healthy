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

	//remove a recipe
	app.delete('/recipe/delete', requireLogin, async (req, res) => {
		const { image } = req.body;

		Recipe.findOneAndRemove(
			{ _user: req.user.id, image: image },
			(err, recipe) => {
				if (err) return res.status(500).send(err);
				const response = {
					message: 'Recipe successfully removed'
				};
				return res.status(200).send(response);
			}
		);
	});

	//get a recipe by image url

	app.get('/recpie/get', requireLogin, async (req, res) => {
		const { image } = req.body;

		const recipe = await Recipe.findOne({
			_user: req.user.id,
			image
		});
		res.send(recipe);
	});

	app.get('/recipe/all', requireLogin, async (req, res) => {
		const recipes = await Recipe.find({ _user: req.user.id });
		res.send(recipes);
	});
};
