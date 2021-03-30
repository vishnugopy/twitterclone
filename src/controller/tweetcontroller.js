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