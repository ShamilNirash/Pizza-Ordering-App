const {User} = require('../database/models/user.model');

const userSignIn = async (req, res) => {
    const {email,password} = req.body;
    try {
      const user = await User.findByEmailAndPassword(email, password);
      if (!user) {
        res.sendStatus(404);
      } else {
        const token = await user.createSession();
        res.header("token", token).json(user._id);
      }
    } catch (error) {
      if (error.message == "User Not Found") {
        res.sendStatus(404);
      } else {
        res.status(400).send(error.message);
      }
    }}


    module.exports={userSignIn}