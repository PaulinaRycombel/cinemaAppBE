const Joi = require("joi");
const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  auditorium: {
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

function validateAudit(reservation) {
  const schema = {
    auditoriumId: Joi.required(),
    seats: Joi.required(),
    totalPrice: Number.min(1).required()
  };

  return Joi.validate(reservation, schema);
}

exports.Reservation = Reservation;
exports.validate = validateAudit;
