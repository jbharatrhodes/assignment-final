var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var adService = require('../services/ad-service');
var userService = require('../services/user-service');
/* GET home page. */

router.get('/', function(req, res, next) {
    if(req.user)
    {
        return res.redirect('./ad');
=======

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.user)
    {
        return res.redirect('/lists');
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
    }
  res.render('index', { title: 'Express' });
});

<<<<<<< HEAD



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





=======
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
module.exports = router;
