const express=require('express')
const router=express.Router();
const itemController=require('../controllers/item-controller');
const authController=require('../controllers/auth-controller');


router.route('/')
        .post(authController.protect,authController.restrictTo('seller','broker'),authController.isSuspended,itemController.addItem)
        // .get(itemController.getItem)
        .delete(authController.protect,authController.restrictTo('seller','broker'),authController.isSuspended,itemController.deleteItem)
        // .patch(authController.protect,authController.restrictTo('seller','broker'),authController.isSuspended,itemController.updateItem)

// router.route('/findItemByPriceRange')
//         .get(itemController.findItemById)
// router.route('/findItemByCategory')
//         .get(itemController.findItemByCategory) 
// router.route('/findItemByOwner')
//         .get(itemController.findItemByOwner)
// router.route('/findItemByItemStatus')
//         .get(itemController.findItemByItemStatus)
// router.route('/findItemByfindByItemFor')
//         .get(itemController.findItemByItemFor)




module.exports=router;