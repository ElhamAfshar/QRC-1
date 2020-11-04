var jwt = require('jwt-simple');

exports.getToken = async(req, res , next) => {
    
    const decoded = jwt.decode(req.header('token'), secret);
    decoded ? next() : res.status(422).json({error:"authentication failed..."})
}