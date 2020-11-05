const mongoose = require("mongoose");

const User = require("../models/User");
const tokeng=require('../services/Token')
const Tell = require("../services/telephone");
const pnumber = require("pnumber");
const redis=require("../services/redis")
const random=require("../services/random")
const config=require("../config");
//const { getToken } = require("../middleware/jwtAuth");

const genResp = (_id , code , res) => {
    const redisCode = redis.GetVal(_id.toString());
    const token = tokeng.generateToken(_id);
    console.log("####" , redisCode);
    console.log(code);
    return (redisCode === code ) ? res.status(200).json({token}) : res.status(422).json({error:"your code is not valid"})
}



exports.reqcode = async(req, res) => {
    const {firstname , lastname , phoneNumber} =req.body
    let phone = pnumber.toEnglishDigits(phoneNumber);
    phone = Tell.phoneMobile(phoneNumber);
  
    if (phone === "number is not valid") {
      return res.status(422).json({ error: "your phone number is not ok!" });
    }

    try {
        let findedUsr = await User.findOne({phoneNumber}).exec();
        if (!findedUsr) {
            const user=new User({
                firstname:firstname,
                lastname:lastname,
                phoneNumber:phoneNumber
            })
             await user.save().then(userSaved => {
                 console.log(userSaved);
                 findedUsr=userSaved;
                })
        }

        const sendedSms = redis.GetVal(findedUsr._id.toString());
        // if (sendedSms) {
        //     return res.status(422).json({ error: "please try after 1min" });
        // } else {
            const genCode = random.RandomBetween(config.MinNumber , config.MaxNumber);
            redis.SetEx(findedUsr._id.toString() , genCode , config.SmsExpireTime);
            console.log("genCode", genCode)

            //todo sending code via sms


            return res.status(200).json("success" );
        //}
   
        
    } catch (error) {
        console.log("err", error)
    }
}

exports.getToken = async(req, res) => {
    const {code , phoneNumber} = req.body;
    //let phone = pnumber.toEnglishDigits(phoneNumber);
    //phone = Tell.phoneMobile(phone);
  
   // if (phone === "number is not valid") {
   //   return res.status(422).json({ error: "your phone number is not ok!" });
   // }
    try {
       await User.findOne({phoneNumber}).exec().then(userFind=>{
            console.log(userFind)
            return userFind ? genResp(userFind._id , code , res) : res.status(422).json({error:"something is wrong...!"})
        })
       
 
    } catch (error) {
        console.log(error)
        res.status(422).json({error:"something is wrong"})
    }
}