const mongoose=require('mongoose')

const itemSchema=mongoose.Schema({
    name:{type:String},
    categoryId:{type:String},
    quantity:{type:String},
    price:{type:String},
    description:{type:String},
    postedBy:{type:String},
    date:{type:Date,default:Date.now()},
    image:{type:String},
    location:{
        city:{type:String,required:true},
        subCity:{type:String},
        village:{type:String}
    },
    itemStatus:{type:String,
        enum:['new','used','slightlyUsed']},
    itemFor:{
        type:String,
        enum:['sell','rent']},
    isAvailable:{type:Boolean,default:true},
    rate:{type:String}

});

module.exports=mongoose.model("Item",itemSchema);