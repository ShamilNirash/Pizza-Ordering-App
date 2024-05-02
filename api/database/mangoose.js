const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`${process.env.DATABASE_URL}`).then(() => {
    console.log("Connecting to the database successfully ...");

}).catch((err) => { "error occur while connecting to the database", err });