const config = require("config");
const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

mongoose
  .connect(config.get("mongo_path"), {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => {
    "Could not connect to MongoDB...";
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
