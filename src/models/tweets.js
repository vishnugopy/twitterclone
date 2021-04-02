const db = require("../db");



exports.getAll = (callback) => {
  db.query("SELECT tweets.id , name , lastname ,username , content , createsAt , userid , url FROM users INNER JOIN tweets ON tweets.userid = users.id order by tweets.id  desc LIMIT 20;", (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}


exports.profiledetails = (iduser,callback) => {
  db.query(`SELECT * FROM tweets INNER JOIN users ON tweets.userid = users.id where tweets.userid = "${iduser}";`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}


exports.detailsprofile = (iduser,callback) => {
  db.query(`SELECT * FROM tweets INNER JOIN users ON tweets.userid = users.id where tweets.userid = "${iduser}";`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}


exports.addTweet = ( content, callback) => {
  db.query(`INSERT INTO tweets (content , createsAt , userid ) 
  VALUES ("${content.content}","${content.createsAt}", "${content.userid}" );`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    
    callback(null, result);
  })
}