const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
	label: String,
	image: String,
	ingredients: Array,
	link: String,
	_user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('recipies', recipeSchema);
