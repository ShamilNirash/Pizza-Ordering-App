const{Pizza}=require("../database/models/pizza.model");

let getPizzaDetails=async (req,res)=>{try{
    const pizzaArray=await Pizza.find()
    return res.status(200).send(pizzaArray);
}catch(e){
    console.log(e);
}
  
}
let postPizzaDetails=async(req,res)=>{
    try{
        const pizza=new Pizza(req.body);
       await pizza.save();
       res.status(200).send("success");
    }catch(e){
        console.log(e);
    }

}
module.exports={getPizzaDetails,postPizzaDetails}