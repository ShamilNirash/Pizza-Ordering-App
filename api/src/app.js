const express = require("express");
const app = express();
require("dotenv").config();
const { mongoose } = require("./database/mangoose");
const middleware = require("./middleware/middleware");
const bodyParser = require("body-parser");

/**************************************************Middle ware start*********************************/
app.use(bodyParser.json());

// CORS HEADERS MIDDLEWARE
app.use(middleware.corsIssue);

/**************************************************Middle ware end*********************************/
app.use("/user", require("./routes/userRouter"));
app.use("/pizza", require("./routes/pizzaRouter"));
app.use("/cart", require("./routes/cartRouter"));
app.use("/order", require("./routes/orderRouter"));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
