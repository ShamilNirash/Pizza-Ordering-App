require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.DATABASE_URL;

  mongoose
    .connect(url)
    .then(() => {
      console.log("Connecting to the database successfully ...");
    })
    .catch((err) => {
      "error occur while connecting to the database", err;
    });

