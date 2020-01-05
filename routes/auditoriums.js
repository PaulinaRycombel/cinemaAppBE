const { Auditorium, validate } = require("../models/auditorium");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const auditoriums = await Auditorium.find().sort("name");
  res.send(auditoriums);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let auditorium = new Auditorium({
    name: req.body.name,
    placesNo: req.body.placesNo,
    placesStruct: req.body.placesStruct
  });

  auditorium = await auditorium.save();

  res.send(auditorium);
});

router.delete("/:id", async (req, res) => {
  const auditorium = await Auditorium.findByIdAndRemove(req.params.id);

  if (!auditorium)
    return res
      .status(404)
      .send("The auditorium with the given ID was not found.");

  res.send(auditorium);
});

module.exports = router;
