
const assert = require('chai').assert;
const myApp = require('../src/aritgeo.js');

describe('aritGeo', function(){
    describe('Handle valid input', function(){
        it('Should return Geometric for aritGeo([2, 4, 8, 16])', function(){
            assert.equal(myApp.aritGeo([2, 4, 8, 16]), 'Geometric');
        });
        it('Should return Arithmetic for aritGeo([2, 4, 6, 8])', function(){
            assert.equal(myApp.aritGeo([2, 4, 6, 8]), 'Arithmetic');
        });
        it('Should return 0 for aritGeo([])', function(){
            assert.equal(myApp.aritGeo([]), '0');
        });
        it('Should return 0 for aritGeo([])', function(){
            assert.equal(myApp.aritGeo([]), '0');
        });
        it('Should return -1 for aritGeo([3, 6, 87, 12, 24])', function(){
            assert.equal(myApp.aritGeo([3, 6, 87, 12, 24]), '-1');
        });
        it('Should return Arithmetic for aritGeo([1, 3, 5, 7])', function(){
            assert.equal(myApp.aritGeo([1, 3, 5, 7]), 'Arithmetic');
        });
        it('Should return -1 for aritGeo([10, 20, 40, 150,  80])', function(){
            assert.equal(myApp.aritGeo([10, 20, 40, 150,  80]), '-1');
        });
        it('Should return Arithmetic for aritGeo([3, 6, 9, 12]))', function(){
            assert.equal(myApp.aritGeo([3, 6, 9, 12]), 'Arithmetic');
        });
        it('Should return Geometric for aritGeo([2, 4, 8, 16])', function(){
            assert.equal(myApp.aritGeo([2, 4, 8, 16]), 'Geometric');
        });
        it('Should return Arithmetic for aritGeo([5, 10, 15, 20]))', function(){
            assert.equal(myApp.aritGeo([5, 10, 15, 20]), 'Arithmetic');
        });
    });
})

describe('aritGeo', function(){
    describe('Handle invalid input', function(){
        it('Should return -1 for aritGeo(["you", "me"])', function(){
            assert.equal(myApp.aritGeo(["you", "me"]), '-1');
        });
        it('Should return 0 for aritGeo([]))', function(){
            assert.equal(myApp.aritGeo([]), '0');
        });
    });
})
