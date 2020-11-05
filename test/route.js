// async function routes (fastify, options) {
//     fastify.get('/', async (request, reply) => {
//       return { hello: 'world' }
//     })
//   }

const fastify = require('fastify')({
  logger: true
})

const auth=require('./Controller/Authentication')


const user=require('./Controller/User')

const token=require('../services/Token')
  
fastify.addHook('preHandler',(req,res,done)=>{
  console.log("@_o_@");
  console.log(req.headers['token']);
  if (req.headers['token']){
    const t=token.decodeToken(req.headers['token']);
    t? done() : res.json("error");
  }
  done();
})

fastify.post('/get-user',user.getUser)


fastify.post('/req-code',auth.reqcode)
fastify.post('/get-token',auth.getToken)


//module.exports = routes