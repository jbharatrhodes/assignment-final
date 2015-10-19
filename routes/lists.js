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
<<<<<<< HEAD
   
=======
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
    var vm= {
        
        title:' Post Your ad',
        //firstname: 'Bharat'
        firstname: req.user ? req.user.firstname : null
    };
<<<<<<< HEAD
  res.render('./', vm);
  
  //return res.redirect('/');
    
});

/* GET user registration page */
router.get('/', function(req, res, next) {
=======
  res.render('lists/lists', vm);
});


/* GET user registration page */
router.get('/lists', function(req, res, next) {
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
  var vm = {
    title: 'Post your ad',
     firstname: req.user ? req.user.firstname : null
  };
<<<<<<< HEAD
  res.render('lists/index', vm);
=======
  res.render('lists/lists', vm);
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
});


/* GET user login page */
<<<<<<< HEAD
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


=======
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
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
module.exports = router;
