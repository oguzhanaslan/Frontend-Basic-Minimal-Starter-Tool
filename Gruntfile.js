module.exports = function(grunt) {

  // gonul kervanini durdura durdura
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/main.js',
        dest: 'js/main.min.js'
      }
    },
    cssmin: {
      with_banner: {
        options: {
          banner: '/* Minified CSS File of <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {
          'css/style.min.css': ['css/*.css'] //hepsini al
        }
      }
    },

    csslint: {
      options: {
      absoluteFilePathsForFormatters: false,
      formatters: [
        {id: 'junit-xml', dest: 'report/csslint_junit.xml'},
        {id: 'csslint-xml', dest: 'report/csslint.xml'}
      ]
      },
      strict: {
        options: {
          import: 2
        },
        src: ['app/assets/stylesheets/style.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['app/assets/stylesheets/style.css']
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

// Load the plugin that provides the "csslint" task.
  grunt.loadNpmTasks('grunt-contrib-csslint');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'csslint']);

};