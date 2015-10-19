var Ad = require ('../models/ad').Ad;

exports.addAd = function (ad, next) {
    var newAd = new Ad ({
       
       adtitle: ad.adtitle,
       descp: ad.descp,
       address: ad.address,
       postcode: ad.postcode,
       telephone: ad.telephone,
        firstname: ad.firstname,
       lastname: ad.lastname
    });
    newAd.save(function(err){
        if(err) {
    return next(err);          
            
        }
       next(null);
    
    });
    
};

exports.getAd = function (next, ad) 
{
  Ad.find(function (err, ad)
  {
  next(err, ad);
  });  
};





