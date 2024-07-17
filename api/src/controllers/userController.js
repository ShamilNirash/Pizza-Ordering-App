const { User } = require("../database/models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSignIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByEmailAndPassword(email, password);
    if (!user) {
      return res.sendStatus(404);
    }
    const token = await user.createSession();
    return res.header("token", token).json(user._id);
  } catch (error) {
    if (error.message == "User Not Found") {
      return res.sendStatus(404);
    }
    return res.status(400).send(error.message);
  }
};

const userSignUp = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({ message: "User Already Exist" });
    }
    const encryptPW = await bcrypt.hash(req.body.password, saltRounds);
    const newBody = {
      firstName: req.body.firstName.toUpperCase(),
      lastName: req.body.lastName.toUpperCase(),
      address: req.body.address.toUpperCase(),
      email: req.body.email.toLowerCase(),
      contactNo: req.body.contactNo,
      password: encryptPW,
    };
    const newUser = new User(newBody);
    await newUser.save();
    const token = await newUser.createSession();
    return res.status(200).header("token", token).send(newUser._id);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error during user sign up");
  }
};
const getUserData = async (req, res) => {
  try {
    const id = req.user_id;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.sendStatus(404);
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.user_id });
    if (!user) {
      return res.status(400).send({ message: "Error Occur" });
    }
    return res.status(200).send({ message: "Delete Successfully" });
  } catch (err) {
    return res.status(400).send(err);
  }
};

let updateUserDetails = async (req, res) => {
  try {
    const user = await User.updateOne(
      { _id: req.user_id },
      {
        $set: {
          firstName: req.body.firstName.toUpperCase(),
          lastName: req.body.lastName.toUpperCase(),
          address: req.body.address.toUpperCase(),
          contactNo: req.body.contactNo,
        },
      }
    );
    if (user) {
      return res.status(200).send({ message: "OK" });
    }
    return res.status(400).send({ message: "Error Occur" });
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = {
  userSignIn,
  userSignUp,
  getUserData,
  deleteUser,
  updateUserDetails,
};
