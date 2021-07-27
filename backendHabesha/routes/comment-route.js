const express=require('express')

const router=express.Router();
const commentController=require('../controllers/comment-controller');
const authController=require('../controllers/auth-controller');


router.route('/commentOnItem')
        .post(authController.restrictTo('classCustomer','broker','seller'),commentController.giveCommentOnItem)
        .get(commentController.getCommentOnItem);


router.route('/commentOnBroker')
        .post(authController.restrictTo('classCustomer','seller'),commentController.giveCommentOnBroker)
        .get(commentController.getCommentOnBroker);
      
        
        
module.exports=router;