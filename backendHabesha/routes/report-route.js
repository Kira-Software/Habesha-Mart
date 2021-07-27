const express=require('express')

const router=express.Router();

const reportController=require('../controllers/report-controller');
const authController=require('../controllers/auth-controller');

router.route('/sendReport')
        .post(authController.restrictTo('classCustomer'),reportController.sendReport)

router.route('/getReport')
        .get(authController.restrictTo('admin'),reportController.getReport)
router.route('/addReportType')
        .post(authController.restrictTo('admin'),reportController.addReportType)


module.exports=router;