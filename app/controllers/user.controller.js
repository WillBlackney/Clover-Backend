const User = require("../models/user.model.js");

// Create and Save a new Room
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Room
    const user = new User({
        user_id: req.body.user_id,
      email: req.body.email,
      password: req.body.password,
     });
  
    // Save Room in the database
    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      else res.send(data);
    });
  };


// Retrieve all Rooms from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      else res.send(data);
    });
  };

// Find a single Room with a RoomId
exports.findOne = (req, res) => {
    User.findById(req.params.user_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.user_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving user with id " + req.params.user_id
          });
        }
      } else res.send(data);
    });
  };

// Update a Room identified by the RoomId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    User.updateById(
      req.params.user_id,
      new User(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found User with id ${req.params.user_id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating User with id " + req.params.user_id
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a Room with the specified RoomId in the request
exports.delete = (req, res) => {
    User.remove(req.params.user_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.user_id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete user with id " + req.params.user_id
          });
        }
      } else res.send({ message: `User was deleted successfully!` });
    });
  };

// Delete all Rooms from the database.
exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all users."
        });
      else res.send({ message: `All users were deleted successfully!` });
    });
  };