'use strict';

const koa = require('koa');
const tracer = require('koa-tracer');
const controller = require('./controller');
const app = koa();

app.use(tracer());
app.use(controller);

app.listen(3000);
console.log('Server is running on port 3000.');
