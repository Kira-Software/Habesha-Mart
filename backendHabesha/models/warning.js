const mongoose=require('mongoose')

const warningSchema=mongoose.Schema({
    warningType:{type:String},
    sendFor:{type:String},
    sendBy:{type:String},
    date:{type:Date,default:Date.now()},
    isArrived:{type:Boolean,defalut:false}

})

module.exports=mongoose.model("Warning",warningSchema);