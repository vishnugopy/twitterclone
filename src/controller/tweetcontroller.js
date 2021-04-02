const { response } = require("express");
const Tweets = require("../models/tweets");


exports.findAll = (request, response) => {
  const { user } = request;
  Tweets.getAll((error, tweets) => {
    if (error) {
      response.send(error.message);
    }

    console.log("tweetsssssssssssssssss ", tweets );

    response.render("index.ejs", { tweets , user  });
  });
}


exports.getprofile = (request, response) => {
  const {iduser} = request.params;
  Tweets.profiledetails(iduser,(error, tweets) => {
    if (error) {
      response.send(error.message);
    }

    console.log("profile ", tweets);

    response.render("profile.ejs", { tweets  });
  });
}

exports.addcontent = (request, response) => {
  Tweets.addTweet(request.body,(error, result) => {
    if (error) {
      response.send(error.message);
    }

    response.redirect("/");
  })
}