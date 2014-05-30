# generator-simple-webapp [![Build Status](https://secure.travis-ci.org/spenoir/generator-simple-webapp.png?branch=master)](https://travis-ci.org/spenoir/generator-simple-webapp)

> A simple [Yeoman](http://yeoman.io) generator that includes configs for Karma and Protractor.
It also utilises assemble for mustache template compiling to html

Uses bower-installer, Karma, Protractor, Mustache

## Dependencies

- Yeoman
- NPM

## Getting Started

To install generator-simple-webapp from npm, run:

```bash
$ npm install -g generator-simple-webapp
```

## Commands

### Initiate the generator:

```bash
$ yo simple-webapp
```

### Start a grunt server with livereload and mustache template assembling

```bash
$ grunt serve
```

This task will start a server and watch on sass, mustache files. When a mustache file is edited it will assemble an html
 file in the project root.

### Start karma tests with

```bash
$ ./node_modules/karma/bin/karma start karma.config.js
```

### Run protractor tests with

```bash
$ ./node_modules/.bin/protractor protractor.config.js
```

You'll need to replace '###' with your browserstack credentials in both of these configs

## License

MIT
