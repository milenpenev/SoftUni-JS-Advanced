const { expect } = require('chai')
const isSymmetric = require('./symmetry');


describe('Symmetry checker', () => {
    it('returns true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('expect to return false for non symmetric', () => {
        expect(isSymmetric([1, 2, 3, 1])).to.be.false;
    });
    it('expect to return false for different type', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
    it('returns error for non array', () =>{
        expect(isSymmetric(5)).to.be.false;
    });
    it('returns true for symmetric array with odd number of el', () =>{
        expect(isSymmetric([1,2,1])).to.be.true;
    });
    it('returns true for string symmetry', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });
    it('returns false for string non-symmetry', () => {
        expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
    });
    it('returns false for string param', () => {
        expect(isSymmetric('abba')).to.be.false;
    });
});

