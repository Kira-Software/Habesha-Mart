const express=require('express')

const User=require('../models/user');
const UserProfile=require('../models/user-profile')
const catchAsync=require('../utils/catchAsync');


exports.deleteAccount=catchAsync(async (req,res,next)=>{
            const {userIdToDelete}=req.body;
            const deleteUser=await User.findByIdAndDelete(userIdToDelete);
            res.json({message:"user Deleted Permanently from the system !"})
});

exports.suspendAccount=catchAsync(async (req,res,next)=>{
            const {userIdToBeSuspended}=req.body;
            const suspendUser=await User.findByIdAndUpdate(userIdToBeSuspended,{isSuspended:true});
            res.json({message:"user has been suspended."})
});
exports.upgradeAccount=catchAsync(async (req,res,next)=>{
            const {userIdToBeUpgraded,roleType}=req.body;
            const upgradedUser=await User.findByIdAndUpdate(userIdToBeUpgraded,{role:roleType});
            res.json({message:"Account has been Upgraded Successfuly",upgradedUser});
});
exports.getAccount=catchAsync(async(req,res,next)=>{
            const {userIdForAccount}=req.body;
            const userDetail=await User.findById(userIdForAccount);
            res.json(userDetail);
})

// exports.getProfile=async(req,res,next)=>{
    
// }

exports.updateProfile=catchAsync(async(req,res,next)=>{
    const userId=req.user._id;
   
    const {firstName,lastName,userName, birthDate,address,gender,phoneNo}=req.body;
    const updateUserProfile= await UserProfile.findByIdAndUpdate(userId,{firstName,lastName,userName, birthDate,address,gender,phoneNo});
    res.json({message:"successfuly updated your account !!"});


})
// exports.updateProfilePicture=async(req,res,next)=>{

// }
exports.updateProfilePicture=catchAsync(async(req,res,next)=>{

        
    const userIdNo=req.user._id;
    const filter = { userId: userIdNo  };
    
    const update = { avatar: req.file.buffer };
    const profilePicture=await UserProfile.findOneAndUpdate(filter, update);
//        await profilePicture.save();
    // req.userProfile.avatar=req.file.buffer  //stores binary image in to user profile try to learn how to get user from session
    
    res.json({message:"your picture has been set successfuly !"})
}),
(error,req,res,next)=>{  //to fuck errors and handle ezihu
    res.status(400).send({error:error.message})
}

