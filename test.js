'use strict';

const co = require('co');
const request = require('co-request');

co(function*(){
  yield new Array(10)
    .fill('http://localhost:3000')
    .map(url => request(url).then(response => console.log(response.body)))
  console.log('done');
})
  .catch(console.log);

