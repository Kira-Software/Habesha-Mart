const mongoose=require('mongoose')

const warningTypeSchema=mongoose.Schema({
    warningName:{type:String},
    description:{type:String},
    createdAt:{type:String}
})

module.exports=mongoose.model("WarningType",warningTypeSchema)