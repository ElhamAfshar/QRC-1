const bodyParser = require("body-parser");
const Authentication = require("./controllers/Authentication");
const User = require("./controllers/User");
const jwtAuth=require("./middleware/jwtAuth")
//const passportService = require("./service/passport");
//const passport = require("passport");


var jsonParser = bodyParser.json();


module.exports=app=>{
    app.post('/request-code',jsonParser,Authentication.reqcode)
    app.post('/register',jsonParser,Authentication.getToken)
    app.get('/user/:id',jsonParser,jwtAuth.getToken,User.getUser)
}