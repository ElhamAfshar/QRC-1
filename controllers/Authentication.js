const mongoose = require("mongoose");

const User = require("../models/User");
const tokeng=require('../services/Token')
exports.register= (req,res,next)=>{
    console.log('req.body az register Authentication', req.body);
    const { fristName,
          lastName, 
          ssn,
          phoneNumber, 
          email,
          token
        } = req.body;
    if (!phoneNumber){
        return res.status(422).send({ error: "you most have a phone" });
    }
    //todo validate telephone Number 
    User.findOne({phoneNumber:phoneNumber})
    .exec()
    .then(userFindWithPhone => {
        if (userFindWithPhone) {
          return res.status(422).send({ error: "Shomare e has" });
        }else{
            
            const user=new User({
                fristName:fristName,
                lastName:lastName,
                ssn:ssn,
                phoneNumber:phoneNumber,
                email:email,
                level:'normal',
                guestToken:token
            });
            
            user.save().then(userSaved => {console.log(userSaved);res.json({ token: tokeng.generateToken(userSaved), user: userSaved })});
        } 
    });
}