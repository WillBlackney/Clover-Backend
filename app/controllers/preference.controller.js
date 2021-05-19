const Preference = require("../models/preference.model.js");

// Create and Save a new Preference
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Preference
    const preference = new Preference({
      preference_id: req.body.preference_id,
      user_id: req.body.user_id,
      ptype: req.body.ptype,
      temperature: req.body.temperature,
      humidity: req.body.humidity,
      fanspeed: req.body.fanspeed,
     });
  
    // Save Preference in the database
    Preference.create(preference, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Preference."
        });
      else res.send(data);
    });
  };


// Retrieve all Preferences from the database.
exports.findAll = (req, res) => {
    Preference.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving islands."
        });
      else res.send(data);
    });
  };
// Find a single Preference with a PreferenceID
exports.findOne = (req, res) => {
    Preference.findById(req.params.preference_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Preference with id ${req.params.preference_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Preference with id " + req.params.preference_id
          });
        }
      } else res.send(data);
    });
  };

// Update a Preference identified by the PreferenceID in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Preference.updateById(
      req.params.preference_id,
      new Preference(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Preference with id ${req.params.preference_id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Preference with id " + req.params.preference_id
            });
          }
        } else res.send(data);
      }
    );
  };
// Delete a Preference with the specified PreferenceID in the request
exports.delete = (req, res) => {
    Preference.remove(req.params.preference_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Preference with id ${req.params.preference_id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Preference with id " + req.params.preference_id
          });
        }
      } else res.send({ message: `Preference was deleted successfully!` });
    });
  };
// Delete all Preferences from the database.
exports.deleteAll = (req, res) => {
    Preference.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Preferences."
        });
      else res.send({ message: `All Preferences were deleted successfully!` });
    });
  };