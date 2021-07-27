const mongoose=require('mongoose');


const requestSchema=mongoose.Schema({

    requestFor:{type:String},
    requestedItem:{type:String},
    requestedItemCategory:{type:String},
    requestedBy:{type:String},
    date:{type:Date,default:Date.now()},
    validUpTo:{type:Date},
    isAccepted:{type:Boolean,default:false}
})

module.exports=mongoose.model("Request",requestSchema);
