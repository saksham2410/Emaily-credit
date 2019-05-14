const express = require("express");
require("./services/passport");
const keys = require("./config/keys");
const mongoose = require("mongoose");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Successful connection");
  }
});

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
