const express=require('express')

const router=express.Router();
const authController=require('../controllers/auth-controller');



router.post('/signup',authController.signUp)
router.delete('/logout',authController.logout)
router.route('/login')
      .post(authController.logIn)
router.route('forgetPassword')
        .post(authController.forgetPassword)
router.route('resetPassword')
        .post(authController.restrictTo('classCustomer'),authController.resetPassword)
router.get('/getSession',async(req,res)=>{
        res.send(req.session);
})
     
              
        
module.exports=router;