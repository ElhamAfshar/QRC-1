const mongoose = require("mongoose");
const User = require("../models/User");
const tokeng=require('../services/Token');

exports.getUser = ( req, res, next ) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    User.findById(id)
      .exec()
      .then((userFind) => res.json({ user: userFind }))
      .catch((err) => res.status(422).send({error: 'we have an issue', err}))
  }

exports.updateUser=(req , res , next)  =>{
    
}