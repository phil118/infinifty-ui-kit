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
                    "dist/css/infinifty.css": "scss/infinifty.scss"
                }
            }
        },
        svg_sprite: {
            options: {
                shape: {
                    id: { 
                        generator: function(name) {  
                            var n = name.toLowerCase().replace(/ /g,"-").replace("_","-").replace(".svg", "").replace(/-v1$/g, "");
                            console.log(n);
                            return n;
                        }
                    }                         
                },
                mode: {
                    symbol: true,
                    view: {           // Activate the «view» mode
                        bust: false,
                        render: {
                          scss: true    // Activate Sass output (with default options)
                        }
                    },
                    css: {        // Activate the «css» mode
                        render: {
                          css: true // Activate CSS output (with default options)
                        }
                    }
                }  
            },
            default: {
                expand: true,
                cwd: 'images/icons/32px',
                src: ['**/*.svg'],
                dest: 'dist/icons'
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
    grunt.loadNpmTasks('grunt-svg-sprite');
    grunt.registerTask('sprites', ['svg_sprite']);
    grunt.registerTask('default', ['sass', 'watch']);
}