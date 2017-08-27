'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
	username :  {
		type: String,
		Required: 'Kindly enter the product title'
	},
	Created_date: {
		type: Date,
		default: Date.now
	},
	email: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	email_verified: {
		type: Boolean,
		Required: 'Kindly enter the product title'
	},
	first_name: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	last_name: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	gender: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	address1: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	address2: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	city: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	state: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	postal_code: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	country: {
		type: String,
		Required: 'Kindly enter the product title'
	}
});

module.exports = mongoose.model('User', UserSchema);