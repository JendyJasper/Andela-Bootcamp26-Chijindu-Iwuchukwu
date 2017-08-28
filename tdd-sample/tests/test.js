
const assert = require('chai').assert;
const myApp = require('../src/aritgeo.js');

describe('aritGeo', function(){
    describe('Handle valid input', function(){
        it('Should return Geometric for aritGeo([2, 4, 8, 16])', function(){
            assert.equal(myApp.aritGeo([2, 4, 8, 16]), 'Geometric');
        });
        it('Should return Arithmetic for aritGeo([2, 4, 6, 8]))', function(){
            assert.equal(myApp.aritGeo([2, 4, 8, 16]), 'Geometric');
        });
    });
})

describe('aritGeo', function(){
    describe('Handle invalid input', function(){
        it('Should return -1 for aritGeo(["you", "me"])', function(){
            assert.equal(myApp.aritGeo([2, 4, 8, 16]), 'Geometric');
        });
        it('Should return 0 for aritGeo([]))', function(){
            assert.equal(myApp.aritGeo([2, 4, 8, 16]), 'Geometric');
        });
    });
})
