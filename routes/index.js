var express = require('express');
var router = express.Router();
var adService = require('../services/ad-service');
var userService = require('../services/user-service');
/* GET home page. */

router.get('/', function(req, res, next) {
    if(req.user)
    {
        return res.redirect('./ad');
    }
  res.render('index', { title: 'Express' });
});




/* GET user registration page */

router.get('/ad', function(req, res, next) {
  var vm = {
    title: 'Latest Classified Ads',
    firstname: req.user ? req.user.firstname : null
  };
  res.render('./ad', vm);
});



router.get('/', function(req, res, next) {
    var vm= {
        
        title:' Post Your ad',
        //firstname: 'Bharat'
        firstname: req.ad ? req.ad.title : null
    };
  res.render('./', vm);
  
  //return res.redirect('/');
    
});

router.get('/api/ad', function(req, res, next) {
  adService.getAd(function(next,ad) {
    res.json(ad);
  });
});





module.exports = router;
