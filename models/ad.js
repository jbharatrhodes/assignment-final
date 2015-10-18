var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var adService =require ('../services/ad-service');
var adSchema = new Schema({
    
    adtitle: String,
    descp: String,
    created: {type: Date, default: Date.now}
},
{ collection: 'ads' }
);
var Ad = mongoose.model('Ad', adSchema);
module.exports = {
  Ad: Ad
};