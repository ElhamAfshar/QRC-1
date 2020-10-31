const mongoose = require("mongoose");

const User = require("../models/User");
const token=require('../services/Token')
exports.register=(req,res,next)=>{
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
                level:'normal'
            });
            user.save().then(userSaved => res.json({ token: token.generateToken(userSaved), user: userSaved }));
        } 
        
    });
}