const express = require("express");
const app = express();
const keys = require("./config/keys");
const mongoose = require("mongoose");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Successful connection");
  }
});

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
