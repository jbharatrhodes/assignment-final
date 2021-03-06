var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService =require ('../services/user-service');
var userSchema = new Schema({
    
    firstname: String,
    lastname: String,
<<<<<<< HEAD
=======
    address: {type:String, required:'Please enter the address'},
    postcode: {type:String, required:'Please enter the postcode'},
    telephone: {type:Number, required:'Please enter the telephone'},
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
    email: {type:String, required:'Please enter the email'},
    password: String,
    created: {type: Date, default: Date.now}
    
});

userSchema.path('email').validate(function(value, next)
{
  userService.findUser(value, function(err, user)
  {
    if(err)
    {
      console.log(err);
      return next(false);
    }
    next(!user);
  });
}, 'This email is alreadry in use');

var User = mongoose.model('User', userSchema);

module.exports = {
  User: User
};