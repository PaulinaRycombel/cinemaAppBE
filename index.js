const config = require("config");
const mongoose = require("mongoose");
const express = require("express");
const tickets = require("./routes/tickets");
const audithoriums = require("./routes/auditoriums");
const screenings = require("./routes/screenings");
const app = express();

app.use(express.json());
app.use("/api/tickets", tickets);
app.use("/api/auditoriums", audithoriums);
app.use("/api/screenings", screenings);

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
