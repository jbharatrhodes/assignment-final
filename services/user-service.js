var User = require ('../models/user').User;

exports.addUser = function (user, next) {
    var newUser = new User ({
       
       firstname: user.firstname,
       lastname: user.lastname,
<<<<<<< HEAD
       
=======
       address: user.address,
       postcode: user.postcode,
       telephone: user.telephone,
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
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
<<<<<<< HEAD




=======
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
//Check if user is already registered
exports.findUser = function (email, next) 
{
  User.findOne({email:email.toLowerCase()}, function (err, user)
  {
  next(err, user);
  });  
};


