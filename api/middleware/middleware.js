const jwt = require("jsonwebtoken");
const { User } = require("../database/models/user.model");

let authenticate = (req, res, next) => {
  const token = req.header("token");
  jwt.verify(token, User.getJwtToken(), (err, decode) => {
    if (err) {
      res.sendStatus(401);
    } else {
      req._id = decode._id;
      next();
    }
  });
};

const corsIssue = (req, res, next) => {
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
};

module.exports = { authenticate, corsIssue };
