var express = require('express');
var router = express.Router();
var passport= require('passport');
var userService = require('../services/user-service');
var config = require('../config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var vm = {
    title: 'Create an account'
  };
  res.render('users/register', vm);
});
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
      res.redirect ('/lists/postads'); 
      
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
});

module.exports = router;
