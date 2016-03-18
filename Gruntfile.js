// Generated on 2016-03-16 using generator-angular 0.12.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn'
  });

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };
  
   grunt.initConfig({
            
             less: {
             target:{
     
        files: {
          "app/styles/style.css": "app/styles/style.less" // destination file and source file
        }

      }
    },
     watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: "app/styles/*",
            tasks: ["less"]
        }
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.registerTask('default','watch');
         //grunt.registerTask('default', ['less']);


  // Define the configuration for all the tasks
  
};
