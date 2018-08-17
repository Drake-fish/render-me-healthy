const keys = require('../config/keys');
const fetch = require('node-fetch');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Recipe = mongoose.model('recipies');
const Menu = mongoose.model('menus');
const Ingredient = mongoose.model('ingredients');

module.exports = app => {
	app.post('/api/menu/create', requireLogin, async (req, res) => {
		const myMenu = await Menu.findOne({
			_user: req.user.id
		});

		if (myMenu) {
			res.send(null);
		} else {
			const menu = new Menu({
				0: null,
				1: null,
				2: null,
				3: null,
				4: null,
				5: null,
				6: null,
				_user: req.user.id
			});

			const menuResponse = await menu.save();
			res.status(200).send(menuResponse);
		}
	});

	//save recipe to menu
	app.post('/api/menu/update', requireLogin, async (req, res) => {
		const recipe = new Recipe({
			title: req.body.recipe.title,
			image: req.body.recipe.image,
			ingredients: req.body.recipe.ingredients,
			link: req.body.recipe.link,
			_user: req.user.id
		});

		const menu = await Menu.updateOne(
			{
				_user: req.user.id
			},
			{
				$set: { [req.body.day]: recipe }
			}
		);
		res.status(200).send(menu);
	});

	//get menu

	app.get('/api/menu', requireLogin, async (req, res) => {
		const menu = await Menu.findOne({
			_user: req.user.id
		});
		res.send(menu);
	});
};
