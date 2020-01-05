var express = require("express");
var app = express();
var mongoose = require("mongoose");
var moviesAPIRouter = require("./routes/moviesAPI");
var cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/movies", moviesAPIRouter);

mongoose.connect("mongodb://localhost/moviedb");
var db = mongoose.connection;

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
