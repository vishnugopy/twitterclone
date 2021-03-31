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


exports.getprofile = (callback) => {
  db.query("SELECT * FROM tweets INNER JOIN users ON tweets.userid = users.id;", (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}