const express = require("express");
const router = express.Router();
const suppSchema = require("../models/supplierSchema");

//create supplier
router.post("/create-supplier", (req, res) => {
  const supplier = suppSchema(req.body);
  supplier
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all suppliers
router.get("/get-all-suppliers", (req, res) => {
  suppSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});

//get supplier
router.get("/get-supplier/:id", (req, res) => {
  const { id } = req.params
  suppSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});

//update supplier
router.put("/update-supplier/:id", (req, res) => {
  const { id } = req.params
  const { email, location, name, twistkey, suppliers, status } = req.body
  suppSchema
    .updateOne({_id: id}, {$set: {name: name, email: email, location: location, twistkey: twistkey, suppliers: suppliers, status: status}} )
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});

//update supplier
router.delete("/delete-supplier/:id", (req, res) => {
  const { id } = req.params
  suppSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});

module.exports = router;
