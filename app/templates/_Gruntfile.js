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
        tasks: ['sass:server']
      },
      mustache: {
        files: ['<%= config.app %>/templates/{,*/}*.mustache'],
        tasks: ['template:dev']
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
          '<%= config.app %>/public/images/{,*/}*'
        ]
      }
    },

    template: {
      dev: {
        engine: 'mustache',
        cwd: '<%= config.app %>/templates',
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: '<%= config.app %>/templates',      // Src matches are relative to this path.
            src: '*.mustache', // Actual pattern(s) to match.
            dest: '<%= config.app %>/',   // Destination path prefix.
            ext: '.html'  // Dest filepaths will have this extension.
          }
        ]
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    sass: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= config.app %>/public/sass',
            src: ['*.{scss,sass}'],
            dest: '<%= config.app %>/public/css',
            ext: '.css'
          }
        ]
      },
      server: {
        files: [
          {
            expand: true,
            cwd: '<%= config.app %>/public/sass',
            src: ['*.{scss,sass}'],
            dest: '<%= config.app %>/public/css',
            ext: '.css'
          }
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
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
    }

  });
  grunt.registerTask('default', ['watch']);

  grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }

    grunt.task.run([
      'clean:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-template-html');

}