const { request } = require("express");
const express = require("express");
const tweetcontroler = require("../controller/tweetcontroller")
const usercontroller = require("../controller/userController")
const isAuth = require("../middlewares/isAuth")

const router = express.Router();

router.get("/" ,isAuth , tweetcontroler.findAll );
router.get("/logout" , usercontroller.logout );
router.post("/signup" , usercontroller.newAccount );
router.get("/signup" , usercontroller.signup );
router.get("/login" , usercontroller.login );
router.post("/login" , usercontroller.authenticate );
router.get("/username/:iduser" , tweetcontroler.getprofile );

router.get("/profile/:id" , tweetcontroler.profile );
router.post("/tweet", isAuth , tweetcontroler.addcontent );



module.exports = router;