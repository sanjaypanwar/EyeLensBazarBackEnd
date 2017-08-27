var multer = require('multer');
var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./images/image_uploads/offer_images");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

var upload = multer({
    storage: Storage
}).fields([{
    name: 'offerLogo', maxCount: 1
}, {
    name: 'offerPromoImage', maxCount: 1
}]); //Field name and max count

exports.get_image = function (req, res) {
    res.sendFile(__dirname + "/image_uploads/offer_images/" + req.params.image_name);
};

function makePreciseJson(overAllJson) {
    var jsonData = JSON.parse(overAllJson);
    var offerLogoObject = jsonData.offerLogo[0];
    var offerLogo = "/offerImages/" + offerLogoObject.filename;

    var offerPromoObject = jsonData.offerPromoImage[0];
    var offerPromo= "/offerImages/" + offerPromoObject.filename;

    var jsonString={"message": "Success","offerLogoUrl":offerLogo , "offerPromoImage": offerPromo};
    return jsonString;

}

exports.upload_image = function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end(JSON.stringify({"message": "Failure"}));
        }//destination":"./images/image_uploads","filename"
        return res.end(JSON.stringify(makePreciseJson(JSON.stringify(req.files))));
    });
};




 