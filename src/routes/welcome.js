const express = require("express");
const router = express.Router();
const welcomeSchema = require("../models/welcomeSchema");

//create message
router.post("/create-message", (req, res) => {
  const supplier = welcomeSchema(req.body);
  supplier
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get message
router.get("/get-message/:id", (req, res) => {
  const { id } = req.params
  welcomeSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});

//update message
router.put("/update-message/:id", (req, res) => {
  const { id } = req.params
  const { email, location, name, twistkey, suppliers, status } = req.body
  welcomeSchema
    .updateOne({_id: id}, {$set: {name: name, email: email, location: location, twistkey: twistkey, suppliers: suppliers, status: status}} )
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});

//delete message welcome
router.delete("/delete-message/:id", (req, res) => {
  const { id } = req.params
  welcomeSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});

module.exports = router;
