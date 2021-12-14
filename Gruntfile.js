const sass = require('node-sass');

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    implementation: sass //and this part
                },
                files: {
                    "css/infinifty.css": "scss/infinifty.scss"
                }
            }
        },

        watch: {
            options: {
                livereload: false,
            },
            styles: {
                files: ['scss/**/*.scss'], // which files to watch
                tasks: ['sass'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['sass', 'watch']);
}