const express=require('express')

const router=express.Router();

const requestController=require('../controllers/request-controller');
const authController=require('../controllers/auth-controller');

router.route('/sendItemRequest')
        .post(authController.restrictTo('classCustomer'),requestController.sendItemRequest)
        .delete(requestController.deleteItemRequest)  //for classCustomers optional for implmentaion
        .patch(requestController.updateItemRequest)   //for classCustomers   optional for implementaion
router.route('/replyItemrequest')
        .post(authController.isSuspended,authController.restrictTo('broker'),requestController.replyItemRequest)   //for brokers
router.route('/getItemRequest')
        .get(authController.isSuspended,authController.restrictTo('broker'),requestController.getItemRequest)   //for brokers

router.route('/sendAccountUpgradeRequest')
        .get(authController.restrictTo('classCustomer'),requestController.sendAccountUpgradeRequest);  // for class customers

router.route('/getAccountUpgradeRequest')
        .get(authController.restrictTo('admin'),requestController.getAccountUpgradeRequest);  //for admin      

module.exports=router;