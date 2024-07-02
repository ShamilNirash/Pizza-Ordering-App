const router = require("express").Router();
const orderController = require("../controllers/orderController");
const middleware =require("../middleware/middleware")
router.post("/newOrder",middleware.authenticate,orderController.createNewOrder);

module.exports=router;
