const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuSchema = new Schema({
	0: Schema.Types.Mixed,
	1: Schema.Types.Mixed,
	2: Schema.Types.Mixed,
	3: Schema.Types.Mixed,
	4: Schema.Types.Mixed,
	5: Schema.Types.Mixed,
	6: Schema.Types.Mixed,
	_user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('menus', menuSchema);
