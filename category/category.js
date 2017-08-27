'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategorySchema = new Schema({
	category_type :  {
		type: String,
		Required: 'Kindly enter the product title'
	},
	Created_date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Category', CategorySchema);