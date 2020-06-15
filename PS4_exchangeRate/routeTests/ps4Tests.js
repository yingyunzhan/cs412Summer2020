const app = require('../app')
const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require ('chai-http');
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

describe('Currency API', () => {
    it('should return 200 success code GET', function (done) {
        chai.request(app)
            .get('/ps4')
            .end((err, response) => {
                expect(response).to.have.status(200);
                expect(response.error).to.be.false;
                expect(response.body).to.be.a('object');
                done();
            });
    });
});

