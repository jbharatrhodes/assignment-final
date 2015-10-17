var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict')
/* GET List  page. */
router.get('/', function(req, res, next) {
    if(!req.isAuthenticated())
    {
        
        return res.redirect('/');
    }
    var vm= {
        
        title:' Latest Listings',
        //firstname: 'Bharat'
        firstname: req.user ? req.user.firstname : null
    };
  res.render('lists/lists', vm);
});

module.exports = router;
