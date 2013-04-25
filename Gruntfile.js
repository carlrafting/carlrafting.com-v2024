/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        compass: 'compass.rb'
      },
      clean: {
        files: {
          'css/global.clean.css': 'scss/global.scss'
        }        
      },
      prod: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/global.min.css': 'scss/global.scss'
        }
      },
      dev: {
        options: {
          debugInfo: true,
          lineNumbers: true
        },
        files: {
          'css/global.css': 'scss/global.scss'
        }
      }
    },
    watch: {
      sass: {
        files: ['scss/*.scss', 'scss/**/*.scss'],
        tasks: 'sass'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  // Default task.
  grunt.registerTask('default', ['sass']);

};
