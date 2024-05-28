const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/data/:userId", userController.getUserData);
router.post("/signIn", userController.userSignIn);
router.post("/signUp", userController.userSignUp);

module.exports = router;
