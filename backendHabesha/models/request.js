const mongoose=require('mongoose');


const requestSchema=mongoose.Schema({

    requestFor:{type:String},//default role of user is broker
    requestedItem:{type:String},
    requestedItemCategory:{type:String}, //holding requested item category requeqst is dispatched to that category ddelala
    requestedBy:{type:String},
    date:{type:Date,default:Date.now()},
    validUpTo:{type:Date},
    isAccepted:{type:Boolean,default:false} //we the data that acce[t request in reply request model]
})

module.exports=mongoose.model("Request",requestSchema);
