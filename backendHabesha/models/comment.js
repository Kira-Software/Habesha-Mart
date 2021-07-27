const mongoose=require('mongoose')

const commentSchema=mongoose.Schema({
    comment:{type:String,required:true},
    date:{type:Date,default:Date.now()},
    userId:{type:String,required:true},
    itemId:{type:String},
    commentFor:{type:String}

})
module.exports=mongoose.model("Comment",commentSchema);
