module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Project settings
    config: config,

    watch: {
      sass: {
        files: ['<%= config.app %>/public/sass/{,*/}*.{scss,sass}'],
        tasks: ['compass:server']
      },
      mustache: {
        files: ['<%= config.app %>/templates/**/{,*/}*.mustache'],
        tasks: ['assemble:site']
      },

//      styles: {
//        files: ['<%%= config.app %>/public/css/{,*/}*.css'],
//        tasks: ['newer:copy:styles', 'autoprefixer']
//      },

      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/{,*/}*.html',
          '<%= config.app %>/public/css/{,*/}*.css',
          '<%= config.app %>/public/images/{,*/}*',
          '<%= config.app %>/public/js/{,*/}*.js'
        ]
      }
    },

    assemble: {
      options: {
        partials: ['<%= config.app %>/templates/includes/*.mustache'],
        data: ['<%= config.app %>/templates/data/*.json'],
        engine: 'mustache',
        flatten: true
      },
      site: {
        src: ['<%= config.app %>/templates/*.mustache'],
        dest: './<%= config.app %>/'
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      dist: {
        options: {
          sassDir: '<%= config.app %>/public/sass',
          cssDir: '<%= config.app %>/public/css',
          imagesDir: '<%= config.app %>/public/images'
        }
      },
      server: {
        options: {
          sassDir: '<%= config.app %>/public/sass',
          cssDir: '<%= config.app %>/public/css',
          imagesDir: '<%= config.app %>/public/images'
        }
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
        base: '<%= config.app %>'
      },
      prod: {
        options: {

        }
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(config.app)
            ];
          }
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              '<%= config.dist %>/*',
              '!<%= config.dist %>/.git*'
            ]
          }
        ]
      },
      server: '.tmp'
    },

    // Run some tasks in parallel to speed up build process
    concurrent: {
      serve: [
        'clean:server',
        'compass:server',
        'watch'
      ],
      standalone: [
        'clean:server',
        'connect:livereload',
        'assemble:site', 'compass:server',
        'watch'
      ]
    }

  });
  grunt.registerTask('default', ['watch']);

  grunt.registerTask('standalone',
      'start the server and preview your app, --allow-remote for remote access. Also compiles mustache templates to html', function (target) {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }

    grunt.task.run([
      'concurrent:standalone'
    ]);
  });

  grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }

    grunt.task.run([
      'concurrent:serve'
    ]);
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('assemble');
}