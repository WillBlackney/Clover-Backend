module.exports = app => {
    const preference = require("../controllers/preference.controller.js");
  
    // Create a new preference
    app.post("/preference", preference.create);
  
    // Retrieve all preferences
    app.get("/preference", preference.findAll);
  
    // Retrieve a single preference with preference id
    app.get("/preference/:preference_id", preference.findOne);
  
    // Update a preference with preference id
    app.put("/preference/:preference_id", preference.update);
  
    // Delete a preference with preference id
    app.delete("/preference/:preference_id", preference.delete);
  
    // Create a new preference
    app.delete("/preference", preference.deleteAll);

};