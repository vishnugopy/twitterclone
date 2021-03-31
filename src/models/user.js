const db = require("../db");

exports.getByUsername = (username, callback) => {
  db.query(`SELECT * FROM users WHERE username = "${username}";`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}

exports.create = (user, callback) => {
  console.log(user.birthday);
  db.query(`INSERT INTO users (name , lastname ,  username , email , password , city , birthday , phone) 
  VALUES ("${user.name}","${user.lastname}", "${user.username}", "${user.email}" , "${user.password}","${user.city}" , "${user.birthday}" , "${user.phone}");`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    
    callback(null, result);
  })
}