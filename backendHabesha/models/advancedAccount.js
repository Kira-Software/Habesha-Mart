const mongoose=require('mongoose');

const advancedAccountSchema=mongoose.model({
    servingCategoryId:{type:String},
    serveLike:{type:String,enum:['broker','seller']},
    userId:{type:String},
    legalIdCard:{type:Buffer},
    legalDocuments:{type:Buffer},
    rate:{type:Number,default:1},
    
});

module.exports=mongoose.model('AdvancedAccount',advancedAccountSchema);
