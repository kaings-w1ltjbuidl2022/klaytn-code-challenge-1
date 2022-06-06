const expect = require('chai').expect;
const problem1 = require('../src/app');

it('should return 0 when the upTo value is 0', function () {
    expect(problem1.sumAllMultipleOf3or5(0)).to.equal(0);
});

it('should throw an error when the upTo value is not a number', function () {
    expect(() => { problem1.sumAllMultipleOf3or5('100') }).to.throw(Error);
});

it('should return 23 when the upTo value is 10', function () {
    expect(problem1.sumAllMultipleOf3or5(10)).to.equal(23);
});

it('should return 2318 when the upTo value is 100', function () {
    expect(problem1.sumAllMultipleOf3or5(100)).to.equal(2318);
});

it('should return 233168 when the upTo value is 1000', function () {
    expect(problem1.sumAllMultipleOf3or5(1000)).to.equal(233168);
});