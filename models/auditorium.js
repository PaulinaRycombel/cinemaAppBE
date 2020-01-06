const Joi = require("joi");
const mongoose = require("mongoose");

const auditoriumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  placesNo: {
    type: Number,
    min: 1,
    max: 999999,
    required: true
  },
  placesStruct: {
    type: [],
    required: true
  }
});

const Auditorium = mongoose.model("Auditorium", auditoriumSchema);

function validateAudit(auditorium) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(255)
      .required(),
    placesNo: Joi.number().required(),
    placesStruct: Joi.required()
  };

  return Joi.validate(auditorium, schema);
}

exports.Auditorium = Auditorium;
exports.validate = validateAudit;
