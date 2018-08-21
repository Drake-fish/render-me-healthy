const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
//Require in our models and services
require('./models/User');
require('./models/Recipe');
require('./models/Ingredient');
require('./models/Menu');

require('./services/passport');

//connect mongoose for mongodb give it the keys
mongoose.connect(keys.mongoConfig, { useNewUrlParser: true });

//instanciate the express server
const app = express();

//middleware below
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

//immediately calling the authRoutes file and passing it app!!
require('./routes/authRoutes')(app);
require('./routes/recipieRoutes')(app);
require('./routes/menuRoutes')(app);
require('./routes/shoppingListRoutes')(app);

//code to ensure that express works correctly in production
if (process.env.NODE_ENV === 'production') {
	// express will serve up production assets
	//like our main.js file or main.css file.
	app.use(express.static('client/build'));
	//express will serve up the index.hml file
	//if it doenst recognize the route.
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

//use the environmental port or localhost 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
