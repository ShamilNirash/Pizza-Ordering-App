const jwt = require("jsonwebtoken");
const { User } = require("../database/models/user.model");
let authenticate = (req, res, next)=> {
    const token=req.header("token")
      jwt.verify(token, User.getJwtToken(), (err, decode) => {
        if (err) {
           res.sendStatus(401);
        } else {
          req._id = decode._id;
          next();
        }
      });
    }

    module.exports={authenticate}