// Require.js allows us to configure shortcut alias
require.config({
  baseUrl: '/public/js',
  paths: {
		jquery: '/public/bower/jquery/jquery',
		underscore: '/public/bower/underscore/underscore',
		backbone: '/public/bower/backbone/backbone',
    'backbone.wreqr' : '/public/bower/backbone.wreqr/backbone.wreqr',
    'backbone.babysitter' : '/public/bower/backbone.babysitter/backbone.babysitter',
    marionette: '/public/bower/marionette/backbone.marionette',
    json2: '/public/bower/json2/json2',
    handlebars: '/public/bower/handlebars/handlebars',
    text: '/public/bower/requirejs-text/text',
    bootstrap: '/public/bower/bootstrap/bootstrap',
    chosen: '/public/bower/chosen/chosen.jquery'
	},
  packages: [
    {
      name: 'hbs',
      location: '/public/bower/requirejs-hbs',
      main: 'hbs'
    }
  ],

  hbs: {
    templateExtension: ".mustache"
  },
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim : {
    'chosen': {
      deps: ["jquery"]
    },
    'bootstrap': {
      deps: ["jquery"]
    },
    handlebars: {
      exports: 'Handlebars'
    },
    backbone : {
      deps : ['jquery', 'underscore'],
      exports : 'Backbone'
    },
    marionette : {
      deps : ['jquery', 'underscore', 'backbone'],
      exports : 'Marionette'
    }
  }
});

define(["app", "router", "controllers/Controller"],
    function (App, AppRouter, AppController) {

        App.appRouter = new AppRouter({
            controller: new AppController()
        });
        // Start Marionette Application
        App.start();
    }
);