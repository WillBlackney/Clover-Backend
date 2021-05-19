const sql = require("./db.js");


const User = function(user) {
    this.user_id = user.user_id;
    this.email = user.email;
    this.password = user.password;
    this.my_current_island = user.my_current_island ;
};

User.create = (newUser, result) =>{
    sql.query("INSERT INTO User SET ?", newUser, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
}

console.log("something");
  });
};

User.findById = (user_id, result) => {
    sql.query(`SELECT * FROM user WHERE user_id = ${user_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }
  
     
      result({ kind: "not_found" }, null);
    });
  };

  User.getAll = result => {
    sql.query("SELECT * FROM User", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("User: ", res);
      result(null, res);
    });
  };

  User.remove = (user_id, result) => {
    sql.query("DELETE FROM User WHERE user_id = ?", user_id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted user with user_id: ", user_id);
      result(null, res);
    });
  };

  User.removeAll = result => {
    sql.query("DELETE FROM user", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} user`);
      result(null, res);
    });
  };
    
  module.exports = User;