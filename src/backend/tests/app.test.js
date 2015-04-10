var chai = require('chai');
var expect = chai.expect;
chai.use(require('sinon-chai'));

describe('backend/app', function () {

  it('main test', function () {
    var middleware = require('../app');
    var res = middleware();
    expect(res).to.equal(true);
  });

});
