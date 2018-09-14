const mongoose = require('mongoose');
const { Schema } = mongoose;

const newRecipeSchema = new Schema({
	label: String,
	image: String,
	cookTime: String,
	PrepTime: String,
	serves: Number,
	ingredients: Array,
	steps: Array,
	category: String,
	description: String
}).index({ label: 'text' });

mongoose.model('newRecipe', newRecipeSchema);
