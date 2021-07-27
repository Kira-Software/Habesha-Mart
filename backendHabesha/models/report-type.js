const mongoose =require('mongoose')

const reportTypeSchema=mongoose.Schema({
        
    reportName:{type:String},
    createdAt:{type:Date,default:Date.now()},
})

module.exports=mongoose.model("ReportType",reportTypeSchema);
