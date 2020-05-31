// CS412 PS1 TEST

const {describe, it} = require('mocha')
const {expect} = require('chai')

const {reorder} = require('../PS1/PS1.P1')
const {evaluate} = require('../PS1/PS1.P2')
const {output} = require('../PS1/PS1.P3')

describe('Problem1 Test', () => {
    it('should return aaabbbccc for input of abcabcabc', function () {
        let outcome = reorder("abcabcabc");
        expect(outcome).to.be.equal("aaabbbccc");
    });
    it('should return adfghjkls for input of asdfghjkl', function () {
        let outcome = reorder("asdfghjkl");
        expect(outcome).to.be.equal("adfghjkls");
    });
    it('should return EIOPQRTUWY for input of QWERTYUIOP', function () {
        let outcome = reorder("QWERTYUIOP");
        expect(outcome).to.be.equal("EIOPQRTUWY");
    });
})


describe('Problem2 Test', () => {
    it('should return 5 for input of 2+3', function () {
        let outcome = evaluate("2+3");
        expect(outcome(2,3)).to.be.equal(5);
    });
    it('should return -1 for input of 2-3', function () {
        let outcome = evaluate("2-3");
        expect(outcome(2,3)).to.be.equal(-1);
    });
    it('should return 6 for input of 2*3', function () {
        let outcome = evaluate("2*3");
        expect(outcome(2,3)).to.be.equal(6);
    });
    it('should return 2 for input of 8/4', function () {
        let outcome = evaluate("8/4");
        expect(outcome(8,4)).to.be.equal(2);
    });
    it('should return 2 for input of 8%3', function () {
        let outcome = evaluate("8%3");
        expect(outcome(8,3)).to.be.equal(2);
    });
})

describe('Problem3 Test', () => {
    it('should return HELLO,WORLD for input of hEllO,world', function () {
        const func = input => input.toUpperCase();
        let outcome = output('hElloworld', func);
        expect(outcome).to.be.equal("HELLOWORLD");
    });
    it('should return HellWrld for input of HelloWorld', function () {
        const func = input => input.replace(/o/gi, '');
        let outcome = output('HelloWorld', func);
        expect(outcome).to.be.equal("HellWrld");
    });
    it('should return hello!!! for input of hello', function () {
        const func = input => input.concat('!!!');
        let outcome = output('hello', func);
        expect(outcome).to.be.equal("hello!!!");
    });
})








