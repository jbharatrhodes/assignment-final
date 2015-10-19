var Ad = require ('../models/ad').Ad;

exports.addAd = function (ad, next) {
    var newAd = new Ad ({
       
       adtitle: ad.adtitle,
<<<<<<< HEAD
       descp: ad.descp,
       address: ad.address,
       postcode: ad.postcode,
       telephone: ad.telephone,
        firstname: ad.firstname,
       lastname: ad.lastname
=======
       descp: ad.descp
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
    });
    newAd.save(function(err){
        if(err) {
    return next(err);          
            
        }
       next(null);
    
    });
<<<<<<< HEAD
    
};

exports.getAd = function (next, ad) 
{
  Ad.find(function (err, ad)
  {
  next(err, ad);
  });  
=======
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
};



<<<<<<< HEAD


=======
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
