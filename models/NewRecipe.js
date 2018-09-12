const mongoose = require('mongoose');
const { Schema } = mongoose;

const newRecipeSchema = new Schema({
	label: String,
	image: String,
	cookTime: String,
	PrepTime: String,
	ingredients: Array,
	steps: Array,
	category: String
});

mongoose.model('newRecipe', newRecipeSchema);
