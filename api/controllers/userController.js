const {User} = require('../database/models/user.model');

const userSignIn = async (req, res) => {
    const {email,password} = req.body;
    try {
      const user = await User.findByEmailAndPassword(email, password);
      if (!user) {
       return res.sendStatus(404);
      } 
        const token = await user.createSession();
        return res.header("token", token).json(user._id);
      
    } catch (error) {
      if (error.message == "User Not Found") {
       return res.sendStatus(404);
      } 
       return res.status(400).send(error.message);
      
    }}

    const getUserData = async (req,res)=>{
      try{
        const id = req.params.userId;
        const user =await  User.findOne({_id:id});
        if(!user){
          return res.sendStatus(404);
        }
        return res.status(200).json(user);
        }
        catch(err){
        return res.status(500).send(err)
        }
      
      }
   

    module.exports={userSignIn,getUserData}