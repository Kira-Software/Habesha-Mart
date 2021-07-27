const express=require('express')

const router=express.Router()
const warningController=require('../controllers/warning-controller');
const authController=require('../controllers/auth-controller')


router.route('/sendWarning')
        .post(authController.restrictTo('admin'),warningController.sendWarning)
router.route('/getWarning')
        .get(authController.restrictTo('broker','seller'),warningController.getWarning)
router.route('/addWarningType')
        .post(authController.restrictTo('admin'),warningController.addWarningType)



module.exports=router;