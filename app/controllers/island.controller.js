const Island = require("../models/island.model.js");

// Create and Save a new Island
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create an island
    const island = new Island({
      island_id: req.body.island_id,
      room_id: req.body.room_id,
      current_temperature: req.body.current_temperature,
      current_humidity: req.body.current_humidity,
      current_fan_speed: req.body.current_fan_speed,
     });
  
    // Save Island in the database
    Island.create(island, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Island."
        });
      else res.send(data);
    });
  };


// Retrieve all Islands from the database.
exports.findAll = (req, res) => {
    Island.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving islands."
        });
      else res.send(data);
    });
  };
// Find a single Island with a IslandID
exports.findOne = (req, res) => {
    Island.findById(req.params.island_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Island with id ${req.params.island_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Island with id " + req.params.island_id
          });
        }
      } else res.send(data);
    });
  };

// Update a Island identified by the IslandID in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Island.updateById(
      req.params.island_id,
      new Island(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Island with id ${req.params.island_id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Island with id " + req.params.island_id
            });
          }
        } else res.send(data);
      }
    );
  };
// Delete a Island with the specified IslandId in the request
exports.delete = (req, res) => {
    Island.remove(req.params.island_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Island with id ${req.params.island_id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Island with id " + req.params.island_id
          });
        }
      } else res.send({ message: `Island was deleted successfully!` });
    });
  };
// Delete all Islands from the database.
exports.deleteAll = (req, res) => {
    Island.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Islands."
        });
      else res.send({ message: `All Islands were deleted successfully!` });
    });
  };