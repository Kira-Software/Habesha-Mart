const express=require('express')

const User=require('../models/user');
const UserProfile=require('../models/user-profile');
const bcrypt=require('bcryptjs')
const jwt =require('jsonwebtoken');

const catchAsync=require('../utils/catchAsync');
const AppError=require('../utils/appError');
const userProfile = require('../models/user-profile');
exports.protect=catchAsync(async(req,res,next)=>{
  
   
    
  //1)check if there is a user from session store
 
  const userId=req.session.user.id;
  
  const currentUser=await User.findById(userId);

       if(!currentUser){
       return next( new AppError("user has been logged out. try to log in again !"));
     }

          //4)check if the user changes password after the token was issued

          // if(currentUser.passwordChangedAfter(decoded.iat)){
            
          //   return next(res.json({status:"fail",message:"user changed password! Login Again!"}));

          // }
  req.user=currentUser; //gives users info for next middle ware after protect lalew middlware yestewal
  next();

})

exports.restrictTo= (...roles)=>{
     
  return (req,res,next)=>{

         if(! roles.includes(req.user.roles)){
            
             console.log(req.user.roles)

             return next(res.json({message:"you didnt have permission to this Action"}));
         }

         next();
     }

  }

exports.isSuspended=catchAsync(async (req,res,next)=>{
  if(req.user.isSuspended){
    return res.json({message:"your account has been suspended for 15 days due to too many reports !"});
  }else
 return next();
})

exports.signUp=catchAsync(async (req,res,next)=>{

    const {userName,email,password,passwordConfirm}=req.body;
   
    const salt=await bcrypt.genSalt();
    const passwordHash=await bcrypt.hash(password,salt);
    const newUser=new User({
            email,passwordHash
        })
    const savedUser=await newUser.save();
  
          //open profile for new user
    const userProfile=new UserProfile({
            userId:savedUser._id
          })
      const profileSaved=await userProfile.save();


        const sessUser =  savedUser;
    req.session.user = sessUser; // Auto saves session data in mongo store

    res.json({ msg: " Logged In Successfully", sessUser }); // sends cookie with sessionID automatically in response

 


})
exports.logIn=catchAsync (async (req,res,next)=>
{
    
    const {userName,password}=req.body;
  

    if(!userName||!password){
     
      return res.json({message:"please enter valid credentials"});
    }
  
    
    // const user=await User.findOne({email}).select('+passwordHash'); //use this for password field select value to be false ...password:{select:false}
       const user=await User.findOne({userName});
   
      if (!user||!(await user.correctPassword(password,user.passwordHash)))
      {

        return res.json({message:"invalid email or password"})

      }

    const sessUser = user;
    req.session.user = sessUser; // Auto saves session data in mongo store

    res.send( sessUser ); // sends cookie with sessionID automatically in response
})

exports.logout=catchAsync(async(req,res,next)=>{

    //this function used with delete method route 
    req.session.destroy((err) => {
        //delete session data from store, using sessionID in cookie
        if (err) throw err;
        res.clearCookie("session-id"); // clears cookie containing expired sessionID
        res.send("Logged out successfully");
        console.log("delchalew")
      });

})

exports.forgetPassword=async(req,res,next)=>{}

exports.resetPassword=async (req,res,next)=>{}
