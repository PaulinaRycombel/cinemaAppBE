const Joi = require("joi");
const mongoose = require("mongoose");

const Ticket = mongoose.model(
  "Ticket",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255
    },
    price: {
      type: Number,
      min: 0,
      max: 999999,
      required: true
    }
  })
);
function validateTicket(ticket) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(255)
      .required(),
    price: Joi.number().required()
  };

  return Joi.validate(ticket, schema);
}

exports.Ticket = Ticket;
exports.validate = validateTicket;
