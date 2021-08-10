const express = require("express");

const Item = require("../models/item");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const multer=require('multer');

exports.checkBody = (req, res, next) => {
  if (
    !req.body.name ||
    !req.body.categoryId ||
    !req.body.price ||
    !req.body.postedBy ||
    !req.body.location
  ) {
    res.json({ message: "missing main elements of an item " });
  }
  next();
};



exports.addItem = catchAsync(async (req, res, next) => {
  
  const {
    name,
    categoryId,
    qunatity,
    price,
    description,
    city,
    subCity,
    itemStatus,
    itemFor,
  } = req.body;
// const image=req.file.buffer;
const postedBy=req.user._id;

  const addedItem = new Item({
    name,
    categoryId,
    qunatity,
    price,
    description,
    city,
    subCity,
    postedBy,
    city,
    subCity, 
    itemStatus,
    itemFor,
  });
  await addedItem.save();
  res.status(200).json({message:"Seccessfuly added !"});
});

exports.deleteItem = (req, res, next) => {};


exports.findItem=catchAsync(async(req,res,next)=>{

        //BUILD A QUERY 
        const queryObj={...req.query} //creates object
        const excludedFields=['page','sort','limit','fields'];
        excludedFields.forEach(el=> delete queryObj[el]); //delete this fields from query
     

        //ADVANCED FILTERING
        let queryStr=JSON.stringify(queryObj);
        queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
   
                                                                                        
      //BUild the Query 
      let query=Item.find(JSON.parse(queryStr))
     
     
         //SORTING
        if(req.query.sort){
         const sortBy=req.query.sort.split(',').join(' ');   
      }else{
         query=query.sort('-createdAt'); 
      }
        //limiting fields
        if(req.query.fields){
           const fields=req.query.fields.split(',').join(' ');
           query=query.select(fields);
           
        }else
        {
           query=query.select('-__v');
        }
        //pagination
        const page=req.query.page * 1 || 1;
        const limit =req.query.limit * 1 || 25;  
        const skip=( page - 1 ) * limit;
        
        query=query.skip(skip).limit(limit);
        
        if(req.query.page){

            const numOfItems=await Item.countDocuments();
            if(skip >= numOfItems) throw new AppError("No More items are available !");
            
        }
        
       
       //EXECUTE A QUERY
        const item=await query; 

        //SEND RESPONSE
        res.status(200).json({status:'success',
                              results:item.length,
                              data:item});
        


});
