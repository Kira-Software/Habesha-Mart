const mongoose=require('mongoose');


const requestSchema=mongoose.Schema({

    requestedFor:{type:[String]},//default role of user is broker
    requestedBy:{type:String},
    requestname:{type:String},
    requestcategory:{type:String}, //holding requested item category requeqst is dispatched to that category ddelala
    requestdescription:{type:String},
    requestlocation:{type:String},
    requestquantity:{type:String},
    date:{type:Date,default:Date.now()},
    validUpTo:{type:Date},
    isAccepted:{type:Boolean,default:false} //we the data that acce[t request in reply request model]
})

module.exports=mongoose.model("Request",requestSchema);
