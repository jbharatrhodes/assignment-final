var express = require('express');
var router = express.Router();
var passport= require('passport');
var userService = require('../services/user-service');
<<<<<<< HEAD
var config = require('../config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var vm = {
    title: 'Create an account'
  };
  res.render('users/register', vm);
});
=======

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('I should get smethinm');
});

>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
/* GET user registration page */
router.get('/register', function(req, res, next) {
  var vm = {
    title: 'Create an account'
  };
  res.render('users/register', vm);
});


/* GET user login page */
router.post('/register', function(req, res, next) {
 userService.addUser(req.body, function (err) {
 if(err) {    
  var vm = {
    title: 'Create an account',
    input: req.body,
    error: err
  };
  delete vm.input.password;
  return res.render('users/register', vm);
  }
  req.login(req.body, function (err) 
  {
<<<<<<< HEAD
      res.redirect ('/lists/postads'); 
=======
      res.redirect ('/lists/lists'); 
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
      
  });
 
});
});

router.get('/login', function(req, res, next) {
  var vm = {
    title: 'Login'
  };
  res.render('login', vm);
});


//checks if login is successful, then redirect to post ads else, return back to home page
<<<<<<< HEAD
router.post('/login', 
function (req, res, next) {
  if(req.body.remember)
  {
    req.session.cookie.maxAge = config.cookieMaxAge;
  }
  next();
  
},
 passport.authenticate('local', {
    failureRedirect: '/', 
    successRedirect: '/lists/postads'
  }));

router.get('/logout', function(req, res, next) {
  req.logout();
  req.session.destroy();
  res.redirect('/');
=======
router.post('/login', passport.authenticate('local', {failureRedirect: '/users/login' } ), function(req,res,next)
{
  var vm= {
        
        title:' Post your Ad',
        //firstname: 'Bharat'
        firstname: req.user ? req.user.firstname : null
    };
  res.render('lists/lists', vm);
});

router.get('/logout', function (req, res, next)
{
    req.logout();
    req.redirect('/');
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
});

module.exports = router;
