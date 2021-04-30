var request = require('supertest');
var app = require('../index.js');
console.log('inside')
describe('GET /', function() {
    console.log('inside')
 it('respond with hello world', function(done) {
 //navigate to root and check the the response is "hello world"
    request(app).get('/').expect('hello world', done);
 });
});