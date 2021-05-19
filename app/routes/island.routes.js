module.exports = app => {
    const island = require("../controllers/island.controller.js");
  
    // Create a new island
    app.post("/island", island.create);
  
    // Retrieve all islands
    app.get("/island", island.findAll);
  
    // Retrieve a single island with island id
    app.get("/island/:island_id", island.findOne);
  
    // Update a island with island id
    app.put("/island/:island_id", island.update);
  
    // Delete a island with island id
    app.delete("/island/:island_id", island.delete);
  
    // Create a new island
    app.delete("/island", island.deleteAll);

};