const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Recipe = mongoose.model('recipies');
const Menu = mongoose.model('menus');
const Ingredient = mongoose.model('ingredients');

module.exports = app => {
	//check if an ingredient exists
	app.post('/api/shopping-list/check', requireLogin, async (req, res) => {
		const response = await Ingredient.find({
			name: req.body.text,
			_user: req.user.id
		});
		res.send(response);
	});

	//update an ingredient quantity

	app.put('/api/shopping-list/update', requireLogin, async (req, res) => {
		Ingredient.findOneAndUpdate(
			{ name: req.body.text },
			{ $inc: { quantity: 1 } },
			{ new: true },
			(err, stuff) => {
				if (err) {
					res.status(500).send(err);
				} else {
					res.status(200).send(stuff);
				}
			}
		);
	});

	//Save an ingredient to the database
	app.post('/api/shopping-list/save', requireLogin, async (req, res) => {
		const ingredient = new Ingredient({
			name: req.body.text,
			quantity: 1,
			_user: req.user.id
		});
		ingredient.save(ingredient, (err, ingredient) => {
			if (err) {
				res.status(500).send(err);
			}
			res.status(200).send(ingredient);
		});
	});

	//get all ingredients from the database
	app.get('/api/shoppinglist', requireLogin, async (req, res) => {
		const ingredients = await Ingredient.find({
			_user: req.user.id
		});
		console.log('Ingredients returned!', ingredients);
		req.send(ingredients);
	});

	//delete an ingredient from the database

	app.delete('/api/shoppinglist/delete', requireLogin, async (req, res) => {
		const ingredient = await Ingredient.findByIdAndRemove(req.body.id);
		req.send(ingredient);
	});
};
