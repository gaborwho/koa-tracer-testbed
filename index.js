'use strict';

const koa = require('koa');
const app = koa();

app.use(function *(){
  console.log('incoming');
  yield new Promise(resolve => setTimeout(resolve, 1000));
  this.body = 'Hello World';
});

app.listen(3000)
console.log('Server is running on port 3000.');
