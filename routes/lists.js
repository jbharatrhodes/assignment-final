var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');
var adService = require('../services/ad-service');
/* GET List  page. */
router.get('/', function(req, res, next) {
    if(!req.isAuthenticated())
    {
        
        return res.redirect('/');
    }
    var vm= {
        
        title:' Post Your ad',
        //firstname: 'Bharat'
        firstname: req.user ? req.user.firstname : null
    };
  res.render('lists/lists', vm);
});


/* GET user registration page */
router.get('/lists', function(req, res, next) {
  var vm = {
    title: 'Post your ad',
     firstname: req.user ? req.user.firstname : null
  };
  res.render('lists/lists', vm);
});


/* GET user login page */
router.post('/lists', function(req, res, next) {
 adService.addAd(req.body, function (err) {
 if(err) {    
  var vm = {
    title: 'Post your Ad',
    error: err
  };
  //return res.render('lists/lists', vm);
  res.send('I should get smethinm');
  }
      res.redirect ('/'); 
});
});
module.exports = router;
