var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var adService =require ('../services/ad-service');
var adSchema = new Schema({
    
    adtitle: String,
    descp: String,
    created: {type: Date, default: Date.now},
    firstname: String,
    lastname: String,
    address: {type:String, required:'Please enter the address'},
    postcode: {type:String, required:'Please enter the postcode'},
    telephone: {type:Number, required:'Please enter the telephone'}
},
{ collection: 'ads' }
);
var Ad = mongoose.model('Ad', adSchema);
module.exports = {
  Ad: Ad
};

