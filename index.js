const config = require("config");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const tickets = require("./routes/tickets");
const audithoriums = require("./routes/auditoriums");
const screenings = require("./routes/screenings");
const moviesAPIRouter = require("./routes/moviesAPI");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/movies", moviesAPIRouter);
app.use("/tickets", tickets);
app.use("/auditoriums", audithoriums);
app.use("/screenings", screenings);

const port = process.env.PORT || 5000;

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
