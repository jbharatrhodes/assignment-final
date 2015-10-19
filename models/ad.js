var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var adService =require ('../services/ad-service');
var adSchema = new Schema({
    
    adtitle: String,
    descp: String,
<<<<<<< HEAD
    created: {type: Date, default: Date.now},
    firstname: String,
    lastname: String,
    address: {type:String, required:'Please enter the address'},
    postcode: {type:String, required:'Please enter the postcode'},
    telephone: {type:Number, required:'Please enter the telephone'}
=======
    created: {type: Date, default: Date.now}
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
},
{ collection: 'ads' }
);
var Ad = mongoose.model('Ad', adSchema);
module.exports = {
  Ad: Ad
<<<<<<< HEAD
};

=======
};
>>>>>>> b885d887e1ecde26b2f0af548719a72b441f64b9
