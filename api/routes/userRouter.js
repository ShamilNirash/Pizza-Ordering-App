const express = require('express');
const router = express.Router();
const userController =require('../controllers/userController');

router.post('/signIn',(userController.userSignIn));



module.exports= router;