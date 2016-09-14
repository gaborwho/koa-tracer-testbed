'use strict';

const controller = function *(){
  const tracer = require('koa-tracer');
  //tracer.log('incoming');
  yield new Promise(resolve => setTimeout(resolve, 1000));
  //tracer.log('incoming done');
  this.body = 'Hello World';
};

module.exports = controller;
