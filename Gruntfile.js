'use strict';

module.exports = function (grunt) {
  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Plugin configuration
  grunt.initConfig({
    jshint: {
      files: [
        './src/**/*.js',
        '!./src/lib/**/*'
      ],
      options: {
        jshintrc: true
      }
    },
    watch: {
      files: [
        './src/**/*.js',
        '!./src/lib/**/*'
      ],
      tasks: ['jshint']
    }
  });
};
