const express = require("express");
const router = express.Router();
const itemController = require("../controllers/item-controller");
const authController = require("../controllers/auth-controller");
const multer = require("multer");

// const upload=multer({
//         //     dest:'avatars',   //this is for local directory storage
//             limits:{
//                     fileSize: 10000000
//             },
//             fileFilter(req,file,cb){  //cb means callback like next new eshi
//                 // if(!file.originalname.endsWith('.pdf')){
//                 //         return cb(new AppError('please select a PDF file'))
//                 // }
//                 if(!file.originalname.match(/\.(png|jpg|jpeg)$/)){  //validation using regular expression this validation founds on regex101.com
//                         return cb(new AppError('please select a png|jpg|jpeg image Format ')) //do this for also word document by changing validation expression
//                 }

//                 cb(undefined,true)
//                 //  no error hapen so go alew
//             }
//         });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, req.user._id+file.originalname);
  },
});

const upload = multer({ storage: storage });

router
  .route("/")
  .post(
    authController.protect,
    authController.restrictTo("seller", "broker"),
    authController.isSuspended,
    upload.any("itemImage"),
    itemController.addItem
  )
  // .get(itemController.getItem)
  .delete(
    authController.protect,
    authController.restrictTo("seller", "broker"),
    authController.isSuspended,
    itemController.deleteItem
  );
// .patch(authController.protect,authController.restrictTo('seller','broker'),authController.isSuspended,itemController.updateItem)

<<<<<<< HEAD
router.route('/')
        .post(authController.protect,authController.restrictTo('seller','broker'),authController.isSuspended,upload.single('image'),itemController.addItem)
        .get(itemController.findItem)
        .delete(authController.protect,authController.restrictTo('seller','broker'),authController.isSuspended,itemController.deleteItem)
        // .patch(authController.protect,authController.restrictTo('seller','broker'),authController.isSuspended,itemController.updateItem)
 
=======
>>>>>>> b71f8a2ec826b9646e0bac5c1597610ad4e919f2
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

module.exports = router;
