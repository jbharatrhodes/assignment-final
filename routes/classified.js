var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');
var adService = require('../services/ad-service');

/* GET user registration page */

/*
router.get('/', function(req, res, next) {
  var vm = {
    title: 'Post your ad',
     firstname: req.user ? req.user.firstname : null
  };
  res.render('classified/index', vm);
});
*/

router.get('api/ad', function(req, res, next) {
  adService.getAd(function(next,ad) {
    res.json(ad);
  });
});
