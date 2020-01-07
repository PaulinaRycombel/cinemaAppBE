const Joi = require("joi");
const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  screening: {
    type: new mongoose.Schema({
      name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
      }
    }),
    required: true
  },
  seats: {
    type: [],
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  }
});

const Reservation = mongoose.model("Reservation", reservationSchema);

function validateReservation(reservation) {
  const schema = {
    screeningId: Joi.required(),
    seats: Joi.required(),
    totalPrice: Joi.number()
      .min(1)
      .required()
  };

  return Joi.validate(reservation, schema);
}

exports.Reservation = Reservation;
exports.validate = validateReservation;
