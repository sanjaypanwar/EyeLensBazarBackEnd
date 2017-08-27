'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderSchema = new Schema({
	product_id :  {
		type: String,
		Required: 'Kindly enter the product title'
	},
	Created_date: {
		type: Date,
		default: Date.now
	},
	customer_id: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	order_no: {
		type: Boolean,
		Required: 'Kindly enter the product title'
	},
	price: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	quantity: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	discount: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	total: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	order_date: {
		type: Date,
		Required: 'Kindly enter the product title'
	},
	order_status: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	order_fullfilled: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	shipper_id: {
		type: String,
		Required: 'Kindly enter the product title'
	}
});

module.exports = mongoose.model('Order', OrderSchema);