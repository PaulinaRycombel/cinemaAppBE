const Joi = require("joi");
const mongoose = require("mongoose");

const screeningSchema = new mongoose.Schema({
  scrId: {
    type: String,
    required: true,
    unique: true,
    minlength: 5
  },
  movie: {
    type: new mongoose.Schema({
      title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
      }
    }),
    required: true
  },
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
  startTime: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  }
});
screeningSchema.index({ srcId: 1 });

const Screening = mongoose.model("Screening", screeningSchema);

function validateAudit(screening) {
  const schema = {
    movieId: Joi.required(),
    auditoriumId: Joi.required(),
    startTime: Joi.required(),
    date: Joi.required()
  };

  return Joi.validate(screening, schema);
}

exports.Screening = Screening;
exports.validate = validateAudit;
