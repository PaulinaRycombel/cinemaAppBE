const Joi = require("joi");
const mongoose = require("mongoose");

const screeningSchema = new mongoose.Schema({
  /* movie: {
    type: new mongoose.Schema({
      title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
      },
      runtime: {
        type: String,
        required: true
      }
    }),
    required: true
  },*/
  auditorium: {
    type: new mongoose.Schema({
      name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
      },
      seatsStruct: {
        type: [],
        required: true
      },
      freeSeats: {
        type: Number,
        min: 0,
        max: 999999,
        required: true
      }
    }),
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const Screening = mongoose.model("Screening", screeningSchema);

function validateAudit(screening) {
  const schema = {
    /* movieId: Joi.objectId().required(),*/
    auditoriumId: Joi.required()
    /*date: Joi.required() /*,
    freeSeats: Joi.required(),
    seatsStruct: Joi.required()*/
  };

  return Joi.validate(screening, schema);
}

exports.Screening = Screening;
exports.validate = validateAudit;
