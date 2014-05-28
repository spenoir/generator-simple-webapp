'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var SimpleWebappGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous SimpleWebapp generator!'));

  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/public');
    this.mkdir('app/public/bower');
    this.mkdir('app/public/css');
    this.mkdir('app/public/js');
    this.mkdir('app/public/js/tests');
    this.mkdir('app/public/js/tests/unit');
    this.mkdir('app/public/js/tests/e2e');
    this.mkdir('app/public/sass');
    this.mkdir('app/templates');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
    this.copy('_karma.config.js', 'karma.config.js');
    this.copy('_karma.local.config.js', 'karma.local.config.js');
    this.copy('_protractor.config.js', 'protractor.config.js');
    this.copy('_agentsmutual.js', 'public/js/agentsmutual.js');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = SimpleWebappGenerator;
