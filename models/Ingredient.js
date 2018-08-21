const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientSchema = new Schema({
	name: String,
	quantity: Number,
	_user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('ingredients', ingredientSchema);
