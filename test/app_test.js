const assert = require('assert');
const request = require('supertest');//same as lod
const app = require('../app');


// done is for asyn test
describe('The express app', () => {
  it('handles a GET request to /api', (done) => {
    request(app)
      .get('/api')
      .end((err, response) => {
        console.log(response.body.hi);
        assert(response.body.hi === 'there');
        done();
      });
  });
});
