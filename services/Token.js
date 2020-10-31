const jwt = require("jwt-simple");

exports.generateToken=(user) =>{
    const allan = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: allan }, config.secret);
}
  