const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
	label: String,
	image: String,
	description: String,
	cookTime: String,
	prepTime: String,
	serves: Number,
	steps: Array,
	category: String,
	ingredients: Array,
	_user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('recipies', recipeSchema);
