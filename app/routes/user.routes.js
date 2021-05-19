module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    // Create a new USER
    app.post("/user", user.create);
  
    // Retrieve all USERS
    app.get("/user", user.findAll);
  
    // Retrieve a single USER with user Id
    app.get("/user/:user_id", user.findOne);
  
    // Update a USER with user Id
    app.put("/user/:user_id", user.update);
  
    // Delete a USER with user Id
    app.delete("/user/:user_id", user.delete);
  
    // Create a new USER
    app.delete("/user", user.deleteAll);

};