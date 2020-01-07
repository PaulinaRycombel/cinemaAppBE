const { Screening, validate } = require("../models/screening");
const { Auditorium } = require("../models/auditorium");
const { Movie } = require("../models/movie");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const screenings = await Screening.find().sort("date");
  res.send(screenings);
});

router.get("/:srcId", async (req, res) => {
  const screening = await Screening.findOne({
    srcId: req.params.srcId
  });
  if (!screening) return res.status(400).send("Invalid movie.");
  res.send(screening);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const movie = await Movie.findById(req.body.movieId);
  if (!movie) return res.status(400).send("Invalid movie.");
  const auditorium = await Auditorium.findById(req.body.auditoriumId);
  if (!auditorium) return res.status(400).send("Invalid movie.");
  const id = `${movie._id}-${req.body.date}-${req.body.hour.replace(":", "")}`;
  let screening = new Screening({
    scrId: id,
    auditorium: {
      _id: auditorium._id,
      name: auditorium.name,
      seatsStruct: auditorium.seatsStruct,
      freeSeats: auditorium.placesNo
    },
    date: req.body.date
  });

  screening = await screening.save();

  res.send(screening);
});

router.delete("/:id", async (req, res) => {
  const screening = await Screening.findByIdAndRemove(req.params.id);

  if (!screening)
    return res
      .status(404)
      .send("The screening with the given ID was not found.");

  res.send(screening);
});

module.exports = router;
