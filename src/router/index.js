const express = require("express");
const tweetcontroler = require("../controller/tweetcontroller")
const usercontroller = require("../controller/userController")


const router = express.Router();

router.get("/" , tweetcontroler.findAll );
// router.get("/signup.ejs" , usercontroller.signup );
router.post("/signup" , usercontroller.signup );



module.exports = router;