const express=require('express');

const Item=require('../models/item');
const catchAsync=require('../utils/catchAsync')
const AppError=require('../utils/appError');

exports.checkBody=(req,res,next)=>{

    if(!req.body.name||!req.body.categoryId||!req.body.price||!req.body.postedBy||!req.body.location)
    {
       res.json({message:"missing main elements of an item "})
    }
    next();
 }
 
exports.addItem=catchAsync(async(req,res,next)=>{
        const{ name,categoryId,qunatity,price,postedBy,image,location,itemStatus,itemFor}=req.body;

        const addedItem=new Item({
                    name,categoryId,qunatity,price,postedBy,image,location,itemStatus,itemFor 
                });
                await addedItemm.save();
                res.send("Seccessfuly added !");

});

exports.deleteItem=(req,res,next)=>{


     
}
// exports.updateItem=(req,res,next)=>{
//     const {itemId,name,quantity,price}=req.body;   
//     const findItem=await Item.findByIdAndUpdate(itemId,{ name,quantity,price})
// }
exports.findItem=catchAsync(async(req,res,next)=>{

        //BUILD A QUERY 
        const queryObj={...req.query} //creates object
        const excludedFields=['page','sort','limit','fields'];
        excludedFields.forEach(el=> delete queryObj[el]); //delete this fields from query
        const query =Item.find(queryObj);

        //ADVANCED FILTERING
        let queryStr=JSON.stringify(queryObj);
        query=queryStr.replace(/\b(gte|gt|lte|lt) \b/g, match => `$${match}`); //this is for in ur query u put like duration[gte]=5 new emtelut keza
                                                                                          // queryObj {duration :{gte:'5'}} hone but '$gte' neber mehon yalbet so ene gte eyflege $ mechemer
        
        
        
       //EXECUTE A QUERY
        const item=await Item.find(JSON.parse(queryStr)); // melseh wede object keyerena felega ketel

        //SEND RESPONSE

        res.status(200).json({status:'success',
                              results:item.length(),
                              data:item});
        


});