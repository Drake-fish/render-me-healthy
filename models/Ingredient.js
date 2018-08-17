const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientSchema = new Schema({
	name: String,
	commonName: String,
	quantity: Number,
	measure: [String],
	_user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('ingredients', ingredientSchema);
