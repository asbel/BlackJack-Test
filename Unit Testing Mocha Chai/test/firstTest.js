var assert = require('chai').assert;
var first = require('../first.js');

// Describe, It, Assert uses Mocha's BDD style functions.
describe('First', function(){ //Call name of the module FIRST.JS
     it('first should return hello world', function(){ //IT takes in a string where you just say what it is, and What you thing is going to happen    
        assert.equal( first(), 'hello world' ) //EQUAL() is a CHAI's library //The second argument should be the expected output 'hello world' 
     })
})

// $ npm run test