const mongoose =require('mongoose')

const ratingSchema=mongoose.Schema({
        
    rateFor:{type:String},
    date:{type:Date,default:Date.now()},
    ratingAmount:{type:String}

})

module.exports=mongoose.model('Rating',ratingSchema);
