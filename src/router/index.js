const express = require("express");
const tweetcontroler = require("../controller/tweetcontroller")


const router = express.Router();

router.get("/" , tweetcontroler.findAll );



module.exports = router;