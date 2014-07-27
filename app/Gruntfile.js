module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // coffeescript is awesome
    coffee: {
      compileJoined: {
        options: {
          join: true
        },
        files: {
          'src/js/main-coffee.js': ['src/coffee/window.coffee', 'src/coffee/app.coffee', 'src/coffee/*.coffee', 'src/coffee/vendor/*.coffee']
        }
      }
    },

    // scss is also awesome
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'src/css/main.css': ['src/scss/*.scss', 'src/scss/vendor/*.scss', 'src/scss/vendor/*.css']
        }
      }
    },

    // concat some js
    concat: {
      dist: {
        src: [
          'src/coffee/vendor/*.js',
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/handlebars/handlebars.min.js',
          'bower_components/ember/ember.min.js',
          'src/js/main-coffee.js'
        ],
        dest: 'src/js/main.js'
      }
    },

    // make my js ugly
    uglify: {
      target: {
        files: {
          'src/js/main.min.js': 'src/js/main.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['coffee', 'sass', 'concat']);
};
