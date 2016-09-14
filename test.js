'use strict';

const co = require('co');
const request = require('co-request');

const getOptions = function(requestId) {
  return {
    url: 'http://localhost:3000',
    headers: {
      'request-id': requestId
    }
  };
};

co(function*(){
  const first = Array.from(new Array(10).keys())
    .map(id => request(getOptions(id)).then(response => console.log(response.body)))
  const second = Array.from(new Array(10).keys())
    .map(id => (new Promise(resolve => setTimeout(resolve, 500))).then(() => request(getOptions(id + 1000))).then(response => console.log(response.body)))
  yield first.concat(second);
  console.log('done');
})
  .catch(console.log);

