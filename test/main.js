const fastify = require('fastify')({
    logger: true
  })
  
// const rt=require('./route')
  

// const fastify = require('fastify')({
//   logger: true
// })

const mongoose = require("mongoose");
const redis = require('redis');
const auth=require('./Controller/Authentication')

const token=require('./services/Token')
const user=require('./Controller/User')

fastify.addHook('preHandler',(req,res,done)=>{
  console.log("@_o_@");
  console.log(req.headers['token']);
  if (req.headers['token']){
    const t=token.decodeToken(req.headers['token']);
    console.log(t);
    t? done() : res.json("error") ;
  }
  done();
})


fastify.post('/get-user',user.getUser)


fastify.post('/req-code',auth.reqcode)
fastify.post('/get-token',auth.getToken)




const client = redis.createClient();
client.on('connect', function() {
    console.log('connected');
});
 

module.exports.client=client

fastify.listen(5000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  
  }
  fastify.log.info(`server listening on ${address}`)

})
  
  