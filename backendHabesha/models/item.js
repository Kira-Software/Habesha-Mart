const mongoose=require('mongoose')

const itemSchema=mongoose.Schema({
    name:{type:String},
    categoryId:{type:String},
    quantity:{type:Number},
    price:{type:Number},
    description:{type:String},
    postedBy:{type:String},
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    image:{type:Buffer},
    city:{type:String},
    subCity:{type:String},
    itemStatus:{type:String,
        enum:['new','used','slightlyUsed']},
    itemFor:{
        type:String,
        enum:['sell','rent']},
    isAvailable:{type:Boolean,default:true},
    rate:{type:Number,default:1.0}

});

module.exports=mongoose.model("Item",itemSchema);