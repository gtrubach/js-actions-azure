'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
chai.should()

describe('Main page', function () {
    it('should return Hello World!', function (done) {
        chai.request(app)
            .get('/')
            .end((error, response) => {
                response.should.have.status(200);
                response.text.should.equal('Hello World!');
                done();
            });
    });
});

describe('API', function () {
    it('should return weather forecast', function (done) {
        chai.request(app)
            .get('/api/weatherforecast')
            .end((error, response) => {
                var expectedContent = [{
                    "date": "2019-07-16T19:04:05.7257911-06:00",
                    "temperatureC": 52,
                    "temperatureF": 125,
                    "summary": "Mild"
                }, {
                    "date": "2019-07-17T19:04:05.7258461-06:00",
                    "temperatureC": 36,
                    "temperatureF": 96,
                    "summary": "Warm"
                }, {
                    "date": "2019-07-18T19:04:05.7258467-06:00",
                    "temperatureC": 39,
                    "temperatureF": 102,
                    "summary": "Cool"
                }, {
                    "date": "2019-07-19T19:04:05.7258471-06:00",
                    "temperatureC": 10,
                    "temperatureF": 49,
                    "summary": "Bracing"
                }, {
                    "date": "2019-07-20T19:04:05.7258474-06:00",
                    "temperatureC": -1,
                    "temperatureF": 31,
                    "summary": "Chilly"
                }];
                response.should.have.status(200);
                response.text.should.equal(JSON.stringify(expectedContent));
                done();
            });
    });
});
