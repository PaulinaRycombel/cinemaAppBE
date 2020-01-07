const { Screening } = require("../models/screening");
const { Reservation, validate } = require("../models/reservation");
const Fawn = require("fawn");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

Fawn.init(mongoose);

router.get("/", async (req, res) => {
  const reservations = await Reservation.find().sort("date");
  res.send(reservations);
});
router.get("/:id", async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);
  res.send(reservation);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let screening = await Screening.findById(req.body.screeningId);
  if (!screening) return res.status(400).send("Invalid screening.");

  screening.auditorium.freeSeats -= req.body.seats.length;

  req.body.seats.forEach(seats => {
    screening.auditorium.seatsStruct[seats[0]][seats[1]] = 1;
  });

  let reservation = new Reservation({
    screening: { _id: req.body.screeningId, name: screening.movie.title },
    seats: req.body.seats,
    totalPrice: req.body.totalPrice
  });
  screening = await Screening.update(
    { _id: req.body.screeningId },
    {
      $set: {
        "auditorium.seatsStruct": screening.auditorium.seatsStruct,
        "auditorium.freeSeats": screening.auditorium.freeSeats
      }
    }
  );
  reservation = await reservation.save();
  res.send(reservation);
});

router.delete("/:id", async (req, res) => {
  const reservation = await Reservation.findByIdAndRemove(req.params.id);

  if (!reservation)
    return res
      .status(404)
      .send("The reservation with the given ID was not found.");

  res.send(reservation);
});

module.exports = router;
