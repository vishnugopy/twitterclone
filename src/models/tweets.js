const db = require("../db");



exports.getAll = (callback) => {
  db.query("SELECT * FROM tweets INNER JOIN users ON tweets.userid = users.id;", (error, result) => {
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

exports.addTweet = ( content, callback) => {
  db.query(`INSERT INTO tweets (content , createsAt , userid ) 
  VALUES ("${content.content}","2020/10/02", "${user.id}" );`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    
    callback(null, result);
  })
}