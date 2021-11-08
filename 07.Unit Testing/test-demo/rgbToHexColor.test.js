const { expect } = require('chai');
const rgbToHexColor = require('./rgb');

describe('RGB Converter', () => {
    describe('Happy paths', () => {
        it('converts white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
        });

        it('converts black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
        });

        it('converts Soft Uni dark blue #234465', () => {
            expect(rgbToHexColor(35, 68, 101)).to.equal('#234465')
        });
    });

    describe('Invalid Params', () => {
        it('returns undefined for missing params', () => {
            expect(rgbToHexColor(255)).to.be.undefined
        });
        it('returns undefined for missing params', () => {
            expect(rgbToHexColor(255, 255)).to.be.undefined
        });
        it('returns undefined for values out for range', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined
        });
        it('returns undefined for values out for range', () => {
            expect(rgbToHexColor(256, 256, 256)).to.be.undefined
        });
        it('returns undefined for invalid params', () => {
            expect(rgbToHexColor('0','0', '0')).to.be.undefined
        });
        it('returns undefined for invalid params', () => {
            expect(rgbToHexColor(0, 0, '0')).to.be.undefined
        });
    })

})