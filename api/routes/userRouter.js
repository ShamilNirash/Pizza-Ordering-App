const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticate=require("../middleware/authenticate")
router.get("/data/:userId", authenticate.authenticate,userController.getUserData);
router.post("/signIn", userController.userSignIn);
router.post("/signUp", userController.userSignUp);

module.exports = router;
