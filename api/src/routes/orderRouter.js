const router = require("express").Router();
const orderController = require("../controllers/orderController");
const middleware = require("../middleware/middleware");

router.post(
  "/newOrder",
  middleware.authenticate,
  orderController.createNewOrder
);
router.get("/orderAll", middleware.authenticate, orderController.getAllOrders);
router.get("/:orderId", middleware.authenticate, orderController.getOrder);
router.patch("/:orderId", middleware.authenticate, orderController.saveOrder);
router.delete(
  "/delete-all",
  middleware.authenticate,
  orderController.deleteAllOrder
);
module.exports = router;
