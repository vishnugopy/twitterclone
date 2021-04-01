const express = require("express");
const ejs = require("ejs");
const cookieParser = require("cookie-parser");

const router = require("./router")


const server = express();


server.engine("ejs" , ejs.renderFile);
server.set("views" , "./src/views")
server.use(express.static("./assets"));

server.use(express.urlencoded({extended:false}));
server.use(cookieParser())
server.use(router);

server.listen(1111 , () => {
    console.log("still runing me");
});