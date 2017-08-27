'use strict';


var mongoose = require('mongoose'),
Brand = mongoose.model('Brand');

exports.list_all_brand = function(req, res) {
  Brand.find({}, function(err, brand) {
    if (err){
      res.send(err);
      console.log('error: '+ err.message);
    }
    res.json(brand);
  });
};




exports.create_a_brand = function(req, res) {
  var new_brand = new Brand(req.body);
  new_brand.save(function(err, brand) {
    if (err)
      res.send(err);
    res.json(brand);
  });
};


exports.read_a_brand = function(req, res) {
  Brand.findById(req.params.brandId, function(err, brand) {
    if (err)
      res.send(err);
    res.json(brand);
  });
};


exports.update_a_brand = function(req, res) {
  Brand.findOneAndUpdate({_id: req.params.brandId}, req.body, {new: true}, function(err, brand) {
    if (err)
      res.send(err);
    res.json(brand);
  });
};


exports.delete_a_brand = function(req, res) {
  Brand.remove({
    _id: req.params.brandId
  }, function(err, brand) {
    if (err)
      res.send(err);
    res.json({ message: 'brand successfully deleted' });
  });
};