const db = require("../db");

exports.getByUsername = (email, callback) => {
  db.query(`SELECT * FROM users WHERE email = "${email}";`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}

exports.create = (user, callback) => {
  db.query(`INSERT INTO users (name , lastname , birthday , username , email , password , phone , city) 
  VALUES ("${user.name}","${user.lastname}", "${user.birthday}", "${user.username}", "${user.email}" , "${user.password}" ,"${user.phone}" ,"${user.city}");`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    
    callback(null, result);
  })
}