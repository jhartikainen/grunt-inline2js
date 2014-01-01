'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.inline2js = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  defaultFunction: function(test) {
    var actual = grunt.file.read('tmp/default.js');
    var expected = grunt.file.read('test/expected/default.js');
    test.equal(actual, expected);
    test.done();
  },
  customFunction: function(test) {
    var actual = grunt.file.read('tmp/custom.js');
    var expected = grunt.file.read('test/expected/custom.js');
    test.equal(actual, expected);
    test.done();
  }
};
