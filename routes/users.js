var express = require('express');
var router = express.Router();
var passport= require('passport');
var userService = require('../services/user-service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('I should get smethinm');
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
      res.redirect ('/lists'); 
      
  });
 
});
});

router.post('/login', passport.authenticate('local'), function(req,res,next)
{
res.redirect('/lists');

});

router.get('/logout', function (req, res, next)
{
    req.logout();
    req.redirect('/');
});

module.exports = router;
