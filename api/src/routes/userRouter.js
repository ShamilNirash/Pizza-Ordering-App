const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const middleware = require("../middleware/middleware");
router.get("/data", middleware.authenticate, userController.getUserData);
router.post("/signIn", userController.userSignIn);
router.post("/signUp", userController.userSignUp);
router.delete("/delete", middleware.authenticate, userController.deleteUser);

module.exports = router;
