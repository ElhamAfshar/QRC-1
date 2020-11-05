const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fristName :String,
    lastName : String,
    ssn:String,
    phoneNumber:{type:String,unique:true},
    phoneNumberValidate: { type: Boolean, default: false },
    email: { type: String, lowercase: true },
    image:String, /// ???
    authCode:Number,
    level: [
        {
          type: String,
          enum: [
           "superAdmin",
           "admin",
           "centerAdmin",
           "guest",
           "normal"
          ],
          default: ["guest"]
        }
    ],
    guestUserId:String
    

},
{ timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const ModelClass = mongoose.model('User', userSchema);

module.exports = ModelClass;