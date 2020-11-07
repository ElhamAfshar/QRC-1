const Koa = require('koa');
var router = require('koa-router');
const app = new Koa();

// app.use(async ctx => {
//   ctx.body = 'Hello World';
//   console.log(ctx.body);
// });


list= (ctx) => {
    // var names = Object.keys(db);
    ctx.body = 'pets: ';
}

var _ = router();              //Instantiate the router
app.use(_.get('/hello', list));   // Define routes

// function *getMessage() {
//    this.body = "Hello world!";
// };

// app.use(_.routes());

app.listen(3000);