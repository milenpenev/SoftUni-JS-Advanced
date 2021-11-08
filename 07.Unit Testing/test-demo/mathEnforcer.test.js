const mathEnforcer = require('./mathEnforcer')
const { expect } = require('chai')

describe('Test mathEnforcer function addFive', () => {
    it('test if addFive works with wrong input', () => {
        expect(mathEnforcer.addFive('5')).to.be.undefined;
        expect(mathEnforcer.addFive([1])).to.be.undefined;
        expect(mathEnforcer.addFive('asd')).to.be.undefined;
        expect(mathEnforcer.addFive({})).to.be.undefined;
        expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    })

    it('test if addFive works', () => {
        expect(mathEnforcer.addFive(5)).to.be.equal(10);
        expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        expect(mathEnforcer.addFive(5.05)).to.be.closeTo(10.05, 0.01);
    })
    it('test if sum works with wrong input', () => {
        expect(mathEnforcer.sum('5')).to.be.undefined;
        expect(mathEnforcer.sum('asd')).to.be.undefined;
        expect(mathEnforcer.sum([1, 2])).to.be.undefined;
        expect(mathEnforcer.sum({})).to.be.undefined;
        expect(mathEnforcer.sum(undefined, NaN)).to.be.undefined;
        expect(mathEnforcer.sum(undefined)).to.be.undefined;
        expect(mathEnforcer.sum([10, 10])).to.be.undefined;
    })
    it('test if sum works', () => {
        expect(mathEnforcer.sum(5, -10)).to.be.equal(-5);
        expect(mathEnforcer.sum(20, -10)).to.be.equal(10);
        expect(mathEnforcer.sum(-5, -15)).to.be.equal(-20);
        expect(mathEnforcer.sum(5.05, -10)).to.be.closeTo(-4.95, 0.01);
        expect(mathEnforcer.sum(5.05, 10.05)).to.be.closeTo(15.1, 0.01);
    })
    it('test if subtractTen works with wrong input', () => {
        expect(mathEnforcer.subtractTen('5', 1)).to.be.undefined;
        expect(mathEnforcer.subtractTen('asd', 'dsa')).to.be.undefined;
        expect(mathEnforcer.subtractTen([1, 2])).to.be.undefined;
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
        expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
    })

    it('test if subtractTen works', () => {
        expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
        expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        expect(mathEnforcer.subtractTen(5.05)).to.be.closeTo(-4.95, 0.01);
    })
})
