const isOddOrEven = require('./evenOrOdd');
const { expect } = require('chai');

describe('Test odd or even', () =>{
    it('Tests invalid input', () =>{
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    });
    it('Test if even function works', () => {
        expect(isOddOrEven('to')).to.be.string('even')
    });
    it('Test if odd function works', () => {
        expect(isOddOrEven('toe')).to.be.string('odd')
    });
})