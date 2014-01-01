/*
 * grunt-inline2js
 * https://github.com/jhartikainen/grunt-inline2js
 *
 * Copyright (c) 2014 Jani Hartikainen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	var fs = require('fs');
	var falafel = require('falafel');
	var escodegen = require('escodegen');
	var path = require('path');

	function inline(src, tplFn, tplPath) {
		var output = falafel(src, function(node) {
			if(node.type == 'CallExpression' && node.callee.type == 'Identifier' && node.callee.name == tplFn) {
				var markup = fs.readFileSync(node.arguments[0].value).toString();
				node.update(escodegen.generate({
					type: 'Literal',
					value: markup
				}));
			}
		});

		return output;
	};

	grunt.registerMultiTask('inline2js', 'Inline file content (eg. HTML, CSS, or even other JS files) into JS files with Grunt', function() {
		var opts = this.options({ templateFunction: '__tpl' });
		this.files.forEach(function(file) {
			file.src.forEach(function(filepath) {
				var src = grunt.file.read(filepath);

				var destPath = file.dest;
				if(file.dest[file.dest.length - 1] == '/') {
					destPath = path.join(file.dest, filepath);
				}

				grunt.file.write(destPath, inline(src, opts.templateFunction));
			});
		});
	});
};
