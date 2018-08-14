const keys = require('../config/keys');
const fetch = require('node-fetch');
const requireLogin = require('../middlewares/requireLogin');

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
};
