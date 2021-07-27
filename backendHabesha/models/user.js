const mongoose=require('mongoose')
const bcrypt=require('bcryptjs');
const validator=require('validator');
const crypto=require('crypto');

const userSchema=mongoose.Schema({
    userName:{
        type:String,
        unique:true
    },
    email:{type:String,
        Required:[true,'email is mandatory to signUp'],
        Unique:true},

    passwordHash:{type:String,required:true,select:false},
    passwordConfirm:{
        type:String,
        Required:[true,'please confirm your password'],
        validate:{
            validator:function (el){
                return el===this.password;
            },
            message:'password does not matches'
        }
    },
    role:{
        type:String,
        required:true,
        enum:['admin','classCustomer','seller','broker'],
        default:'classCustomer'
    },
    isSuspended:{
        type:Boolean,
        default:false
    },
    passwordChangedAt:Date,
    passwordResetToken:String,
    passwordResetExpires:Date
    

});

userSchema.pre('save',async function (next){

    if(!this.isModified('password'))return next(); 
 
    this.password=await bcrypt.hash(this.password,12);

    this.passwordConfirm=undefined;

    next();


});
userSchema.pre('save',function (next){

   if(!this.isModified('password')|| this.isNew()) return next();  // giving permission that the password isnt modified after login

   this.passwordChangedAt=Date.now() - 1000;  //giving some delay time between passwordChangedAt and token generated  
   next();

})

userSchema.methods.correctPassword=async function(candidiatePassword,userPassword){
    return await bcrypt.compare(candidiatePassword,userPassword);
};

module.exports=mongoose.model("User",userSchema);