const express = require("express");
const tweetcontroler = require("../controller/tweetcontroller")
const usercontroller = require("../controller/userController")


const router = express.Router();

router.get("/" , tweetcontroler.findAll );
router.get("/logout" , usercontroller.logout );
router.post("/signup" , usercontroller.newAccount );
router.get("/signup" , usercontroller.signup );
router.get("/login" , usercontroller.login );
router.post("/login" , usercontroller.authenticate );
router.get("/username/:iduser" , tweetcontroler.getprofile );
router.post("/tweet" , tweetcontroler.addcontent );



module.exports = router;