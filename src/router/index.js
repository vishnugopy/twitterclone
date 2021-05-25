const { request } = require("express");
const express = require("express");
const tweetcontroler = require("../controller/tweetcontroller")
const usercontroller = require("../controller/userController")
const isAuth = require("../middlewares/isAuth")

const router = express.Router();

// Display all tweets after being auth
router.get("/" , tweetcontroler.findAll );
// To disconnect
router.get("/logout" , usercontroller.logout );
// To create an account via post
router.post("/signup" , usercontroller.newAccount );
// To ??????
router.get("/signup" , usercontroller.signup );
// To connect
router.get("/login" , usercontroller.login );
// To verify if the user is connected
router.post("/login" , usercontroller.authenticate );
// To get user profile
router.get("/username/:iduser" , tweetcontroler.getprofile );
// ?????????
router.get("/profile/:id" , tweetcontroler.profile );
// To post a tweet
router.post("/tweet" , tweetcontroler.addcontent );



module.exports = router;
