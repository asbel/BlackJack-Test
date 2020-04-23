var assert = require('chai').assert;
var add = require('../add.js');

//BEGINNER BASIC LEVEL
// Describe, It, Assert uses Mocha's BDD style functions.
describe('Add', function(){
    
    it('should add card to current sum', function(){
        var sum = add(5);
        assert.equal(sum, sum + 5); //EQUAL
    })

    it('should return type number', function(){
        var sum = add(5);
        assert.typeOf(result, 'number'); //TYPEOF 
    })
})
// $ npm run test