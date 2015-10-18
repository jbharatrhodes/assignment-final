var Ad = require ('../models/ad').Ad;

exports.addAd = function (ad, next) {
    var newAd = new Ad ({
       
       adtitle: ad.adtitle,
       descp: ad.descp
    });
    newAd.save(function(err){
        if(err) {
    return next(err);          
            
        }
       next(null);
    
    });
};



