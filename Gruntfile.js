/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {
      options: {
        compass: true
      },
      
      clean: {
        files: {
          'css/global.css': 'scss/global.scss'
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
          'css/global.dev.css': 'scss/global.scss'
        }
      }
    },

    less: {
      clean: {
        files: {
          'css/global.css': 'less/global.less'
        }
      },
    
      development: {
        options: {
          dumpLineNumbers: 'all'
        },
        
        files: { 
          'css/global.dev.css': [
            'less/*.less'
          ]
        }
      },
    
      production: {
        options: {
          compress: true,
          yuicompress: true
        },
        
        files: {
          'css/global.min.css': [
            'less/*.less'          
          ]
        }
      }
    },    
    
    watch: {
      less: {
        files: ['less/*.less', 'less/**/*.less'],
        tasks: 'less'
      },
    
      sass: {
        files: ['scss/*.scss', 'scss/**/*.scss'],
        tasks: 'sass'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-less');
  
  // Default task.
  grunt.registerTask('default', ['less']);
  
  grunt.registerTask('styles', ['watch:less']);

};
