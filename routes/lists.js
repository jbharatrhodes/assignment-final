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
  res.render('./', vm);
  
  //return res.redirect('/');
    
});

/* GET user registration page */
router.get('/', function(req, res, next) {
  var vm = {
    title: 'Post your ad',
     firstname: req.user ? req.user.firstname : null
  };
  res.render('lists/index', vm);
});


/* GET user login page */
router.post('/', function(req, res, next) {
 adService.addAd(req.body, function (err) {
 if(err) {    
  var vm = {
    title: 'Added',
    error: err
  };
  return res.render('lists/index', vm);
  //res.send('I should get smethinm');
  }
    //res.send('I am here');
      res.redirect ('/lists/thank'); 
});
});
/* GET user registration page */
router.get('/thank', function(req, res, next) {
  var vm = {
    title: 'Thank you for your ad',
     firstname: req.user ? req.user.firstname : null
  };
  res.render('lists/thank', vm);
});


module.exports = router;
