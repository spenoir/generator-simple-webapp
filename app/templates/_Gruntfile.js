module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: 'public',
            src: ['sass/*.scss'],
            dest: 'public/css',
            ext: '.css'
          }
        ],
        options: {
          style: 'expanded'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    },
    mustache: {
      files: {
        src: 'templates/',
        dest: 'templates/templates.js',
        options: {
          verbose: true
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'watch']);
  grunt.loadNpmTasks('grunt-mustache');
}