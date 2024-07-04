const router = require("express").Router();
const orderController = require("../controllers/orderController");
const middleware = require("../middleware/middleware");

router.post(
  "/newOrder",
  middleware.authenticate,
  orderController.createNewOrder
);
router.get("/:orderId", middleware.authenticate, orderController.getOrder);
router.patch("/:orderId",middleware.authenticate,orderController.saveOrder)
module.exports = router;
