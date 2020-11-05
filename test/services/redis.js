const client =require("../main")
// const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);

exports.SetEx= (userId , val , time)=>{
    console.log("userId , val , time", userId , val , time)

    const seted =  client.client.set(userId,  val, "ex" ,time);

    console.log("seted", seted)
}

exports.GetVal=(userId )=>{
    console.log("userId", userId)
    const geted = client.client.get(userId, (err, code) => {
        if(err) return err
        console.log("code", code)
        return code
    });
    console.log("geted", geted)
    return geted
}

// const setRedis = (key) => {

//     const seted = client.client.set("nothing", key)
//     console.log("seted", seted)
// }

// const getRedis = (key) => {
//     const geted = client.client.get(key)
//     console.log("geted", geted)
// }

// setRedis("nothing")
// getRedis("nothing")

