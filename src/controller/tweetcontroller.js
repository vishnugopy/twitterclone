const { response } = require("express");
const Tweets = require("../models/tweets");

exports.findAll = (request, response) => {
  Tweets.getAll((error, tweets) => {
    if (error) {
      response.send(error.message);
    }

    console.log("tweetsssssssssssssssss ", tweets);

    response.render("index.ejs", { tweets });
  });
}


exports.getprofile = (request, response) => {
  Tweets.profiledetails((error, tweets) => {
    if (error) {
      response.send(error.message);
    }

    console.log("profile ", tweets);

    response.render("profile.ejs", { tweets });
  });
}