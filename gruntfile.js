module.exports = function(grunt) {

    require('grunt-task-loader')(grunt);

    // Project configuration.
    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),
            clean: ['apps'], 
            copy: {
                wallet: {
                    files: [
                        // Images
                        {
                            expand: true, 
                            flatten: true, 
                            src: ['appsSrc/wallet/images/**.png'], 
                            dest: './apps/wallet/dist', 
                            filter: 'isFile'
                        },
                        // Manifest
                        {
                            expand: true, 
                            flatten: true, 
                            src: ['appsSrc/wallet/manifest.json'], 
                            dest: './apps/wallet/', 
                            filter: 'isFile'
                        },
                        // Index
                        {
                            expand: true, 
                            flatten: true, 
                            src: ['appsSrc/wallet/index.html'], 
                            dest: './apps/wallet/', 
                            filter: 'isFile'
                        },
                        // App Scripts
                        {
                            expand: true, 
                            flatten: true, 
                            src: ['appsSrc/wallet/js/**.js'], 
                            dest: './apps/wallet/dist/js/', 
                            filter: 'isFile'
                        },
                    ]
                }
            },
        }
    );
  
    // Default task(s).
    grunt.registerTask('default', ['clean', 'copy']);
  
  };