const router = require("express").Router();
const cartController = require("../controllers/cartController");
const middleware = require("../middleware/middleware");

router.get("/data", middleware.authenticate, cartController.getUserCart);
router.post("/data", middleware.authenticate, cartController.createNewOrder);
router.patch(
  "/update-cart/:cartId",
  middleware.authenticate,
  cartController.updateCart
);
router.delete("/delete-cart/:cartId", cartController.deleteCart);
module.exports = router;
