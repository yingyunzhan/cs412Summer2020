const app = require('../app')

const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require ('chai-http');
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

describe('News API GET Test', () => {
    it('should return 200 success code', function (done) {
        chai.request(app)
            .get('/ps4')
            .end((err, response) => {
                expect(response).to.have.status(200);
                expect(response).to.be.an('object');
                expect(response.error).to.be.false;
                done();
            });
    });
});

describe('News API POST Test', () => {
    it('should return 200 success code', function (done) {
        chai.request(app)
            .post('/ps4')
            .send({ 'country': 'CN'})
            .end((err, response) => {
                expect(response).to.have.status(200);
                expect(response).to.be.an('object');
                expect(response.error).to.be.false;
                done();
            });
    });
});