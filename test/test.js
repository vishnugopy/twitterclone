
const assert = require('assert');


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });

describe('#length of array', function() {
    it('should return 3 when the array has 3 elements', function() {
      assert.strictEqual([1, 2, 3].length, 3);
    });
  });
});

