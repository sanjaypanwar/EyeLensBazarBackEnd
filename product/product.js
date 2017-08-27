'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
	product_title :  {
		type: String,
		Required: 'Kindly enter the product title'
	},
	Created_date: {
		type: Date,
		default: Date.now
	},
	product_description: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	product_type: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	barcode: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	category_id: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	brand_id: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	style: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	shape: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	size: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	frame_color: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	glass_color: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	gender: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	age_group: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	offer_id: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	face_type: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	work_type: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	current_price: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	original_price: {
		type: String,
		Required:'Kindly enter the product title'
	},
	images: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	disposability: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	expiry: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	water_content: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	package: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	diameter: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	base_curve: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	rating: {
		type: String,
		Required: 'Kindly enter the product title'
	},
	item_count: {
		type: Number,
		Required: 'Kindly enter the product title'
	}
});

module.exports = mongoose.model('Product', ProductSchema);