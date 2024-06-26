const router=require("express").Router();
const pizzaController=require("../controllers/pizzaController")

router.get("/data",pizzaController.getPizzaDetails);
router.post("/data",pizzaController.postPizzaDetails);

module.exports=router;