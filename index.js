const express = require('express')
const app = express()
const mongoose = require("mongoose");
require("dotenv").config();
const useRoute = require('./routes/user')
const useAuth = require('./routes/auth')
const port = process.env.PORT
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected Successfully ..."))
  .catch((err) => console.log(err));



app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api/user',useRoute);
app.use('/api/auth',useAuth);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

