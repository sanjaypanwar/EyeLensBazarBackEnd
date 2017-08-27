'use strict';


var mongoose = require('mongoose'),
  Offer = mongoose.model('Offer');

exports.list_all_offer = function(req, res) {
  Offer.find({}, function(err, offer) {
    if (err)
      res.send(err);
    res.json({'offers':offer});
  });
};




exports.create_a_offer = function(req, res) {
  var new_offer = new Offer(req.body);
  new_offer.save(function(err, offer) {
    if (err)
      res.send(err);
    res.json(offer);
  });
};


exports.read_a_offer = function(req, res) {
  Offer.findById(req.params.offerId, function(err, offer) {
    if (err)
      res.send(err);
    res.json(offer);
  });
};


exports.update_a_offer = function(req, res) {
  Offer.findOneAndUpdate({_id: req.params.offerId}, req.body, {new: true}, function(err, offer) {
    if (err)
      res.send(err);
    res.json(offer);
  });
};


exports.delete_a_offer = function(req, res) {
  Offer.remove({
    _id: req.params.offerId
  }, function(err, offer) {
    if (err)
      res.send(err);
    res.json({ message: 'offer successfully deleted' });
  });
};