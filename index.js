const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const useRoute = require('./routes/user')

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected Successfully ..."))
  .catch((err) => console.log(err));

app.use(express.json)
app.use('/api/user',useRoute);

app.listen(process.env.PORT, () => {
  console.log("Running Sucessfully ..");
});
