var User = require ('../models/user').User;

exports.addUser = function (user, next) {
    var newUser = new User ({
       
       firstname: user.firstname,
       lastname: user.lastname,
       
       email: user.email.toLowerCase(),
       password: user.password
    });
    newUser.save(function(err){
        if(err) {
    return next(err);          
            
        }
       next(null);
    
    });
};




//Check if user is already registered
exports.findUser = function (email, next) 
{
  User.findOne({email:email.toLowerCase()}, function (err, user)
  {
  next(err, user);
  });  
};


