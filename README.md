# grunt-inline2js

Inline file content (eg. HTML, CSS, or even other JS files) into JS files with Grunt.

You can use this to for example inline templates into your JS files, inline CSS, or pretty much anything else.

The plugin works by replacing a call to a template function with the contents of the file passed as its parameter.

```js
var stuff = __tpl('path/to/file.html');
```

is turned into...

```js
var stuff = 'contents of file are put here';
```


## Task options

```js
grunt.initConfig({
  inline2js: {
    options: {
      templateFunction: '__tpl'
    },
    files: {
      src: ['src/*.js'],
      dest: 'build/'
    }
  },
});
```

The `templateFunction` option defines which function name is used as the template function. Defaults to `__tpl`.

You define which files should be processed using the standard Grunt file syntax, as shown in the `files` attribute. Note: if destionation is a directory, full path names are kept for source files.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
