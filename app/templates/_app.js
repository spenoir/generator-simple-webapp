define(['backbone', 'marionette'],
  function (Backbone, Marionette) {

    var App = new Backbone.Marionette.Application();

    //Organize Application into regions corresponding to DOM elements
    //Regions can contain views, Layouts, or subregions nested as necessary
    App.addRegions({
        headerLoginRegion: "header .navbar-right li a span"
    });

    App.addInitializer(function () {
        Backbone.history.start();
    });

    return App;
  }
);