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
                        // Service Worker
                        {
                            expand: true, 
                            flatten: true, 
                            src: ['appsSrc/wallet/service-worker.js'], 
                            dest: './apps/wallet/dist/', 
                            filter: 'isFile'
                        },
                    ]
                }
            },
            watch: {
                walletJS: {
                    files: ['appsSrc/wallet/**/*.js'],
                    tasks: ['copy:wallet'],
                    options: {
                        livereload: {
                            host: 'localhost',
                            port: 9000,
                        }
                    }
                },
            },
        }
    );
  
    // Default task(s).
    grunt.registerTask('default', ['clean', 'copy', 'watch']);
  
  };