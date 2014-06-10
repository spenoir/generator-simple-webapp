/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
      deps: [
          'underscore_contrib'
      ],
			exports: '_'
		},
    jquery : {
      exports : 'jQuery'
    },
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
    marionette : {
      deps : ['jquery', 'underscore', 'backbone'],
      exports : 'Marionette'
    },
    stache: {
      extension: '.mustache',
      path: '../../templates/'
    }
	},
	paths: {
		jquery: '../bower/jquery/jquery',
		underscore: '../bower/underscore/underscore',
		underscore_contrib: '../bower/underscore-contrib/underscore-contrib',
		backbone: '../bower/backbone/backbone',
    marionette: '../bower/marionette/marionette',
    Mustache: '../bower/mustache/mustache',
    text: '../bower/text/text',
    stache: '../bower/stache'
	}
});

require([
	'backbone',
  'marionette',
	'views/app',
	'routers/router'
], function (Backbone, AppView, Workspace) {
	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start();

	// Initialize the application view
	new Backbone.Marionette.Application();
});