'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OfferSchema = new Schema({
	offer_title :  {
		type: String,
		Required: 'Kindly enter the product title'
	},
	Created_date: {
		type: Date,
		default: Date.now
	},
	offer_logo: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	offer_description: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	offer_promo_image: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	offer_start_date: {
		type: Date,
		Required: 'Kindly enter the product title'
	},
	offer_end_date: {
		type: Date,
		Required: 'Kindly enter the product title'
	}
});

module.exports = mongoose.model('Offer', OfferSchema);