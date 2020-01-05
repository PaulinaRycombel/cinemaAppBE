const Joi = require("joi");
const mongoose = require("mongoose");

const Movie = mongoose.model(
  "Movies",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255
    },
    actors: {
      type: String,
      minlength: 5
    },
    description: {
      type: String,
      required: true,
      minlength: 5
    },
    img_url: {
      type: String,
      minlength: 5
    },
    runtime: {
      type: String,
      minlength: 5
    },
    genres: {
      type: String,
      required: true
    },
    screening_room: {
      type: String,
      required: true
    },
    dailyRentalRate: {
      type: String,
      required: true
    },
    showtime_today: {
      type: String,
      required: true
    },
    showtime_tomorrow: {
      type: String,
      required: true
    }
  })
);

function validateMovie(movie) {
  const schema = {
    title: Joi.string()
      .min(5)
      .max(50)
      .required()
  };

  return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;
