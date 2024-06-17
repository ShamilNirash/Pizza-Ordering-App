const mongoose = require("mongoose");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const jwtSecret = "lOsDKMXBayayFJQNNmUp5KqbwV1U4QfGIvPt4kTO6BEEJyhZoAhtQBqEa";
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  sessions: [
    {
      refreshToken: { type: String, required: true },
      expireAt: {
        type: Number,
        required: true,
      },
    },
  ],
});
userSchema.statics.getJwtToken= function(){
  const user =this;
  return jwtSecret;
}
//tojson method
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  return new _.omit(userObject, ["sessions", "password"]);
};

//refresh token generator
userSchema.methods.generateRefreshToken = function () {
  const user = this;
  return new Promise((resolve, reject) => {
    jwt.sign(
      { _id: user._id },
      jwtSecret,
      { expiresIn: "1m" },
      (err, token) => {
        if (!err) {
          return resolve(token);
        } else {
          return reject(err);
        }
      }
    );
  });
};

//expire time of refresh token
let expireTimeRefreshToken = function () {
  let currentTime = Date.now() / 1000;
  const timeDuration = 1;
  let expireTime = currentTime + timeDuration * 60 * 60;
  return expireTime;
};

//save to database
let saveSessionToDatabase = async function (user, token) {
  try {
    user.sessions.push({
      refreshToken: token,
      expireAt: expireTimeRefreshToken(),
    });
    await user.save();
    return token;
  } catch (err) {
    console.log("failed to save in database", err);
    throw new Error("failed to save in database");
  }
};

//create a session
userSchema.methods.createSession = async function () {
  const user = this;
  try {
    const token = await user.generateRefreshToken();
    const savedToken = await saveSessionToDatabase(user, token);
    return savedToken;
  } catch (err) {
    console.log("failed to create session", err);
    throw new Error("failed to create session");
  }
};
/*************************************************************************************** */
//searching methods
userSchema.statics.findByEmailAndPassword = async function (email, password) {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User Not Found");
    }
    if (user.password !== password) {
      //strick equality (check both value and type)
      throw new Error("User Not Found");
    }
    return user;
  } catch (error) {
    console.log("Error in finding user", error);
    throw error;
  }
};
userSchema.statics.findByTokenAndId = function (token, id) {
  return User.findOne({ "sessions.refreshToken": token, _id: id });
};

const User = mongoose.model("User", userSchema);
module.exports = { User };
