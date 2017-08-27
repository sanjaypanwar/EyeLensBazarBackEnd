'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BrandSchema = new Schema({
	brand_title :  {
		type: String,
		Required: 'Kindly enter the product title'
	},
	Created_date: {
		type: Date,
		default: Date.now
	},
	brand_description: {
		type: String,
		Required: 'Kindly enter the product title'
	}
});

module.exports = mongoose.model('Brand', BrandSchema);