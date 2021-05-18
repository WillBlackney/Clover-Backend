module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    // Create a new Customer
    app.post("/user", user.create);
  
    // Retrieve all room
    app.get("/user", user.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/user/:user_id", user.findOne);
  
    // Update a Customer with customerId
    app.put("/user/:user_id", user.update);
  
    // Delete a Customer with customerId
    app.delete("/user/:user_id", user.delete);
  
    // Create a new Customer
    app.delete("/user", user.deleteAll);

};