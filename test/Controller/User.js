const mongoose = require("mongoose");
const User = require("../models/User");
const tokeng=require('../services/Token');

exports.getUser = ( req, res, next ) => {
  console.log("0000000000000000000000000000");
  const id = mongoose.Types.ObjectId(req.params.id);
  console.log("1111111111111111111");
  
    User.findById(id)
      .exec()
      .then((userFind) => res.json({ user: userFind }))
      .catch((err) => res.status(422).send({error: 'we have an issue', err}))
  }


exports.updateUser=(req , res , next)  =>{
    
}