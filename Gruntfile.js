"use strict";

module.exports = function(grunt) {

  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    config: {
      src: 'src',
      dist: 'dist'
    },
    
    sass: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= config.src %>/styles',
                src: ['*.sass'],
                dest: '<%= config.dist %>/assets/css',
                ext: '.css'
            }]
        }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: '<%= config.dist %>/assets/css/',
        src: ['*.css'],
        dest: '<%= config.dist %>/assets/css/',
        ext: '.min.css'
      }
    },

    autoprefixer: {
      single_file: {
        options: {
          browsers: ['last 2 version', 'ie 8', 'ie 7']
        },
        src: '<%= config.dist %>/assets/css/app.css',
        dest: '<%= config.dist %>/assets/css/app.css'
      },
    },

    concat: {
      app: {
        src: [
          '<%= config.src %>/js/app.js'
        ],
        dest: '<%= config.dist %>/assets/js/app.js'
      }
    },
      
    imagemin: {
      jpg: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>/assets/images/',
          src: ['*.jpg'],
          dest: '<%= config.dist %>/assets/images/',
          ext: '.jpg'
          }]
      }
    },

    uglify: {
      app: {
        src: '<%= config.dist %>/assets/js/app.js',
        dest: '<%= config.dist %>/assets/js/app.min.js'
      }
    },

    assemble: {
      options: {
        assets: '<%= config.dist %>/assets', 
        data: '<%= config.src %>/data/*.{json,yml}',
        flatten: true,
        helpers: '<%= config.src %>/templates/helpers/*.js',
        layout: 'default.hbs',
        layoutdir: '<%= config.src %>/templates/layouts',
        partials: '<%= config.src %>/templates/partials/*.hbs',
        collections: [{
          name: 'post',
          sortby: 'posted',
          sortorder: 'descending'
        }]
      },
      posts: {
        files: [{
          cwd: '<%= config.src %>/templates/site/',
          dest: '<%= config.dist %>',
          expand: true,
          src: '*.hbs'
        }, {
          cwd: '<%= config.src %>/content/',
          dest: '<%= config.dist %>/blog/',
          expand: true,
          src: '*.md'
        }]
      },
    },
      
    watch: {
      assemble: {
        files: ['<%= config.src %>/**/*.{md,hbs,yml}'],
        tasks: ['assemble']
      },
      sass: {
        files: '<%= config.src %>/styles/**/*.{sass,scss}',
        tasks: ['sass']
      },
      cssmin: {
        files: '<%= config.dist %>/assets/css/*.{css}',
        tasks: ['cssmin']
      },
      concat: {
      files: '<%= config.src %>/js/{,*/}*.js',
      tasks: ['concat']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9001,
        livereload: 35728,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: false,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.{html,xml}']

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');    

  grunt.registerTask('serve', [
    'clean',
    'assemble',
    'sass',
    'concat',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'assemble',
    'sass',
    'concat',
    'uglify',
    'cssmin',
    'imagemin'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
