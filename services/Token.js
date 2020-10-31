const jwt = require("jwt-simple");

exports.generateToken=(user) =>{
    const allan = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: allan }, 'skjdhws8904w3biusdb928nisbdamiraliali');
}
  