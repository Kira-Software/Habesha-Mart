const express=require('express')

const Request=require('../models/request');
const User = require('../models/user');

exports.sendItemRequest=(req,res,next)=>{
   
    // const {requestedItem,requestedItemCategory,validUpTo}=req.body;
    
    //     const responsibleBrokersAccount=await AdvancedAccount.find({serveFor:'broker',servingCategoryId:requestedItemCategory});
    //     const requestedFor=responsibleBrokersAccount.toArray(); //responsible broker accpunt wesst idiwenbecha
    //     const requestedBy=req.user._id;
    //     const request=await new Request({
    //         requestedFor,requestedItem,requestedItemCategory,requestedBy,validUpTo //validUpTo ccan be default 15 days
    //     });
    //     const requestSaved=await request.save();
    //     res.status(200).json({message:"Your request has been set Successfully"})
      

};
exports.getItemRequest=(req,res,next)=>{
    // const {userId}=req.user._id;
    // //find the broker Advanced Account
    // const brokerAdvancedAccount=await AdvancedAccount.find({userId:userId});

    // const requestToMe=await Request.find({requestedItemCategory:brokerAdvancedAccount.servingCategoryId});

    // res.status(200).json({
    //     message:"success",
    //     data:requestToMe
    // })

};
exports.replyItemRequest=(req,res,next)=>{};
exports.deleteItemRequest=(req,res,next)=>{};  //optional for implementation
exports.updateItemRequest=(req,res,next)=>{};
exports.sendAccountUpgradeRequest=(req,res,next)=>{};
exports.getAccountUpgradeRequest=(req,res,next)=>{};


