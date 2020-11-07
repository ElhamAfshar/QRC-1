const jwt = require("jwt-simple");
const config=require("../config")
exports.generateToken=(_id) =>{
    const know = new Date().getTime();
    return jwt.encode({ sub: _id, iat: know }, config.SecretKey);
}

exports.decodeToken=(token)=>{
    console.log("aaaaa");
    const test=jwt.decode(token,config.SecretKey);
    console.log("bbbb");
    console.log(test);
    return test;
}