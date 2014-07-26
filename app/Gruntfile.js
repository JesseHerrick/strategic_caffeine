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
          'src/js/main.js': ['src/coffee/*.coffee', 'src/coffee/vendor/*.coffee', 'src/coffee/vendor/*.js']
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
