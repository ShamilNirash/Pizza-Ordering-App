const express = require("express");
const app = express();
require("dotenv").config();
const { mongoose } = require("./database/mangoose");
const bodyParser = require("body-parser");

/**************************************************Middle ware start*********************************/
app.use(bodyParser.json());

// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, token, _id"
  );
  // headers that are exposed to client
  res.header("Access-Control-Expose-Headers", "token");
  next();
});



/**************************************************Middle ware end*********************************/
app.use("/user", require("./routes/userRouter"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
