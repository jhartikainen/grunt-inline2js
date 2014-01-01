/*
 * grunt-inline2js
 * https://github.com/jhartikainen/grunt-inline2js
 *
 * Copyright (c) 2014 Jani Hartikainen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    inline2js: {
      defaultFunction: {
        files: {
          'tmp/default.js': ['test/fixtures/default.js'],
        },
      },
      customFunction: {
        options: {
          templateFunction: 'foobar'
        },
        files: {
          'tmp/custom.js': ['test/fixtures/custom.js'],
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'inline2js', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
