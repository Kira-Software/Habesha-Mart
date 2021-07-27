const mongoose=require('mongoose')

const replyRequestSchema=mongoose.Schema({

    requestId:{type:String},
    repliedBy:{type:String},
    itemFounded:{type:String},
    itemAmount:{type:String},
    itemPrice:{type:String},
    itemLocation:{type:String},
    date:{type:Date,default:Date.now()}
})
module.exports=mongoose.model("ReplyRequest",replyRequestSchema);