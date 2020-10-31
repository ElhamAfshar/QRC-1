const bodyParser = require("body-parser");
const Authentication = require("./controllers/Authentication");

var jsonParser = bodyParser.json();

module.exports=app=>{
    app.post('/register',jsonParser,Authentication.register)
}