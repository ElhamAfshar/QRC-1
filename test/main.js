const fastify = require('fastify')({
    logger: true
  })
  
// const rt=require('./route')
  

// const fastify = require('fastify')({
//   logger: true
// })

const auth=require('./Controller/Authentication')


const user=require('./Controller/User')
fastify.post('/get-user',user.getUser)


fastify.post('/req-code',auth.reqcode)
fastify.post('/get-token',auth.getToken)


fastify.listen(5000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  
  }
  fastify.log.info(`server listening on ${address}`)

})
  
  