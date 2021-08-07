const express = require("express");

const User = require("../models/user");
const UserProfile = require("../models/user-profile");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const userProfile = require("../models/user-profile");

const signToken = async (userId) => {
  return await jwt.sign({ id: userId }, process.env.SECRET, {
    expiresIn: process.env.expiresIn,
  });
};

exports.protect = catchAsync(async (req, res, next) => {
  //1)check if there is a user from session store
 
  const token = req.session.token;
  const verify = await jwt.verify(token, process.env.SECRET)

  const currentUser = await User.findById(verify.id);

  if (!currentUser) {
    return next(
      new AppError("user has been logged out. try to log in again !")
    );
  }

  //4)check if the user changes password after the token was issued

  // if(currentUser.passwordChangedAfter(decoded.iat)){

  //   return next(res.json({status:"fail",message:"user changed password! Login Again!"}));

  // }
  req.user = currentUser; //gives users info for next middle ware after protect lalew middlware yestewal
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      console.log(req.user.role);

      return next(
        res.json({ message: "you didnt have permission to this Action" })
      );
    }

    next();
  };
};

exports.isSuspended = catchAsync(async (req, res, next) => {
  if (req.user.isSuspended) {
    return res.json({
      message:
        "your account has been suspended for 15 days due to too many reports !",
    });
  } else return next();
});

exports.signUp = catchAsync(async (req, res, next) => {
  const { userName, email, password } = req.body;
  console.log("the comming datas are" + req.body);

  const salt = crypto.randomBytes(16).toString("hex");
  const passwordHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  const newUser = new User({
    userName,
    email,
    salt,
    passwordHash,
  });
  const savedUser = await newUser.save();

  //open profile for new user
  const userProfile = new UserProfile({
    userId: savedUser._id,
  });
  const profileSaved = await userProfile.save();

  const sessUser = savedUser;
  const token = await signToken(savedUser._id);
  req.session.token = token; // Auto saves session data in mongo store

  res.json({ status: "success", user: savedUser }); // sends cookie with sessionID automatically in response
});
exports.logIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.json({ message: "please enter valid credentials" });
  }

  // const user=await User.findOne({email}).select('+passwordHash'); //use this for password field select value to be false ...password:{select:false}
  const user = await User.findOne({ email });
  console.log(user);
  const comp =
    user.passwordHash ===
    crypto.pbkdf2Sync(password, user.salt, 10000, 64, "sha512").toString("hex");
  console.log("passhash", user.passwordHash);
  console.log(
    "new",
    crypto.pbkdf2Sync(password, user.salt, 10000, 64, "sha512").toString("hex")
  );
  if (!user || !comp) {
    return res.json({ message: "invalid email or password" });
  }

  const token = await signToken(user._id);
  req.session.token = token; // Auto saves session data in mongo store

  res.status(200).json({ status: "success", user }); // sends cookie with sessionID automatically in response
});

exports.logout = catchAsync(async (req, res, next) => {
  //this function used with delete method route
  req.session.destroy((err) => {
    //delete session data from store, using sessionID in cookie
    if (err) throw err;
    res.clearCookie("session-id"); // clears cookie containing expired sessionID
    res.send("Logged out successfully");
    console.log("delchalew");
  });
});

exports.forgetPassword = async (req, res, next) => {};

exports.resetPassword = async (req, res, next) => {};
