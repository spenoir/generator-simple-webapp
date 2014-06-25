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
        this.installDependencies({
          skipInstall: this.options['skip-install'],
          callback: function () {
            if (!this.options['skipBowerInstaller']) {
              return this.spawnCommand('./node_modules/.bin/bower-installer');
            }
            return false;
          }.bind(this) // bind the callback to the parent scope
        });

    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous SimpleWebapp generator!'));

    var prompts = [
      {
        type: 'confirm',
        name: 'skipBowerInstaller',
        message: 'Would you like to skip bower-installer copying files from bower_components?',
        default: false
      }
    ];

    this.prompt(prompts, function (props) {
      this.skipBowerInstaller = props.skipBowerInstaller;

      done();
    }.bind(this));
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
    this.mkdir('app/public/js/views');
    this.mkdir('app/public/js/controller');
    this.mkdir('app/public/sass');
    this.mkdir('app/public/images');
    this.mkdir('app/templates');
    this.mkdir('app/templates/data');
    this.mkdir('app/protractor_junit');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
    this.copy('_karma.config.js', 'karma.config.js');
    this.copy('_karma.local.config.js', 'karma.local.config.js');
    this.copy('_protractor.config.js', 'protractor.config.js');
    this.copy('_app.js', 'app/public/js/app.js');
    this.copy('_config.js', 'app/public/js/config.js');

    this.copy('.folder', 'app/protractor_junit/.folder');
    this.copy('.folder', 'app/public/images/.folder');

  }
});

module.exports = SimpleWebappGenerator;
