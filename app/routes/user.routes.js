module.exports = app => {
    
    const user = require("../controllers/user.controller.js");  
    
    app.post("/user", user.create); // Create a new USER  
  
    app.get("/user", user.findAll);   // Retrieve all USERS  

    app.get("/user/:user_id", user.findOne);     // Retrieve a single USER with user Id
    
    app.get("/user/email/:email", user.findByEmail); // Retrieve a single USER with BY EMAIL  
   
    app.put("/user/:user_id", user.update);  // Update a USER with user Id  
   
    app.delete("/user/:user_id", user.delete);  // Delete a USER with user Id  
  
    app.delete("/user", user.deleteAll);   // Create a new USER
};