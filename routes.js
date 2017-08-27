'use strict';
module.exports = function (app) {
    var products = require('./product/productController');
    var brands = require('./brand/brandController');
    var offers = require('./offers/offerController');
    var offerImages = require('./images/offer_image_upload');
    var productImages = require('./images/product_image_upload');


    // products Routes
    app.route('/products')
        .get(products.list_all_products)
        .post(products.create_a_product);


    app.route('/products/:productId')
        .get(products.read_a_product)
        .put(products.update_a_product)
        .delete(products.delete_a_product);

    app.route('/products/latest/:pageSize')
        .get(products.read_latest_products);


    // brands Routes
    app.route('/brands')
        .get(brands.list_all_brand)
        .post(brands.create_a_brand);


    app.route('/brands/:brandId')
        .get(brands.read_a_brand)
        .put(brands.update_a_brand)
        .delete(brands.delete_a_brand);


    // offers Routes
    app.route('/offers')
        .get(offers.list_all_offer)
        .post(offers.create_a_offer);


    app.route('/offers/:offerId')
        .get(offers.read_a_offer)
        .put(offers.update_a_offer)
        .delete(offers.delete_a_offer);


    // image upload routes
    app.route('/offerImages/:image_name')
        .get(offerImages.get_image);

    app.route('/offer_image_upload')
        .post(offerImages.upload_image);


    // image upload routes
    app.route('/productImages/:image_name')
        .get(productImages.get_image);

    app.route('/product_image_upload')
        .post(productImages.upload_image);

};
