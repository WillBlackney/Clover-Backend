module.exports = app => {
    const room = require("../controllers/room.controller.js");
  
    // Create a new ROOM
    app.post("/room", room.create);
  
    // Retrieve all ROOMS
    app.get("/room", room.findAll);
  
    // Retrieve a single ROOM with room Id
    app.get("/room/:room_id", room.findOne);
  
    // Update a ROOM with room Id
    app.put("/room/:room_id", room.update);
  
    // Delete a ROOM with room Id
    app.delete("/room/:room_id", room.delete);
  
    // Create a new ROOM
    app.delete("/room", room.deleteAll);

};
