var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
	unqId: String,
	isbn: String,
	name: String,
	status: Number,//0-free,1-reserved,2-borrowed
	applyTime: Date,
	lendTime: Date,
	name: String,
	intrID: String,
	borrower : [{intrID: String, name: String }]
});

module.exports = mongoose.model('Book', BookSchema);

