const jwt = require("jwt-simple");
const config=require("../config")
exports.generateToken=(_id) =>{
    const know = new Date().getTime();
    return jwt.encode({ sub: _id, iat: know }, config.SecretKey);
}

exports.decodeToken=(token)=>{
    return jwt.decode(token,config.SecretKey);
}