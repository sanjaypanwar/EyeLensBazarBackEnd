var multer = require('multer');
var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./images/image_uploads/product_images");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

var upload = multer({
    storage: Storage
}).fields([{
    name: 'productImage1', maxCount: 1
}, {
    name: 'productImage2', maxCount: 1
}, {
    name: 'productImage3', maxCount: 1
}, {
    name: 'productImage4', maxCount: 1
}, {
    name: 'productImage5', maxCount: 1
}, {
    name: 'productImage6', maxCount: 1
}, {
    name: 'productImage7', maxCount: 1
}, {
    name: 'productImage8', maxCount: 1
}]); //Field name and max count

exports.get_image = function (req, res) {
    res.sendFile(__dirname + "/image_uploads/product_images/" + req.params.image_name);
};

exports.upload_image = function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end(JSON.stringify({"message": "Failure"}));
        }//destination":"./images/image_uploads","filename"
        return res.end(JSON.stringify(makePreciseJson(JSON.stringify(req.files))));
    });
};


function makePreciseJson(overAllJson) {
    var jsonData = JSON.parse(overAllJson);
    var productImage1="",productImage2="",productImage3="",productImage4="",
    productImage5="",productImage6="",productImage7="",productImage8="";

    if(jsonData.hasOwnProperty('productImage1')){
        var productImage1Object = jsonData.productImage1[0];
        productImage1 = "/productImages/" + productImage1Object.filename;
    }
    if(jsonData.hasOwnProperty('productImage2')){
        var productImage2Object = jsonData.productImage2[0];
        productImage2 = "/productImages/" + productImage2Object.filename;
    }
    if(jsonData.hasOwnProperty('productImage3')){
        var productImage3Object = jsonData.productImage3[0];
        productImage3 = "/productImages/" + productImage3Object.filename;
    }
    if(jsonData.hasOwnProperty('productImage4')){
        var productImage4Object = jsonData.productImage4[0];
        productImage4 = "/productImages/" + productImage4Object.filename;
    }
    if(jsonData.hasOwnProperty('productImage5')){
        var productImage5Object = jsonData.productImage5[0];
        productImage5 = "/productImages/" + productImage5Object.filename;
    }
    if(jsonData.hasOwnProperty('productImage6')){
        var productImage6Object = jsonData.productImage6[0];
        productImage6 = "/productImages/" + productImage6Object.filename;
    }
    if(jsonData.hasOwnProperty('productImage7')){
        var productImage7Object = jsonData.productImage7[0];
        productImage7 = "/productImages/" + productImage7Object.filename;
    }
    if(jsonData.hasOwnProperty('productImage8')){
        var productImage8Object = jsonData.productImage8[0];
        productImage8 = "/productImages/" + productImage8Object.filename;
    }


    var jsonString = {"message": "Success", "productImage1": productImage1, "productImage2": productImage2 ,"productImage3": productImage3, "productImage4": productImage4,"productImage5": productImage5, "productImage6": productImage6,"productImage7": productImage7, "productImage8": productImage8};
    return jsonString;

}




