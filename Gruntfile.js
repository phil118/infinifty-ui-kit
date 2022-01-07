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
                            var n = name.toLowerCase().replace(/ /g,"-").replace("_","-").replace(".svg", "").replace(/-v1$/g, "").replace(/-01$/g, "");
                            console.log(n);
                            return n;
                        }
                    }                         
                },
                mode: {
                    symbol: true
                }  
            },
            icons32: {
                expand: true,
                cwd: 'images/icons/32px',
                src: ['**/*.svg'],
                dest: 'images/sprites/32'
            },
            icons24: {
                expand: true,
                cwd: 'images/icons/24px',
                src: ['**/*.svg'],
                dest: 'images/sprites/24'
            },
            icons16: {
                expand: true,
                cwd: 'images/icons/16px',
                src: ['**/*.svg'],
                dest: 'images/sprites/16'
            }
        },
        copy: {
            main: {
              files: [
                {
                  expand: true, 
                  cwd: 'images/sprites', 
                  src: ['**/*.svg'], 
                  dest: 'dist/icons',
                  rename: function(dest, src) {
                    return dest + '/' + src.substring(0, src.indexOf('/')) + '.sprite.svg';
                  }
                },
                {
                    expand: true, 
                    src: ['images/wallets/**'], 
                    dest: 'dist'
                },
                {
                    expand: true, 
                    src: ['images/favicons/**'], 
                    dest: 'dist'
                },
                {
                    expand: true, 
                    src: ['images/logo.svg'], 
                    dest: 'dist'
                }
              ]
            }
        },
        clean: [ 'dist', 'images/sprites'],
        w3c_css_validation: {
            target: {
                options: {
                    logfile: 'logs/w3c_css_validation.json',
                    profile: 'css3svg',
                    warning: 'no'
                },
                src: ['dist/css/*.css'],
            }
        },
        watch: {
            options: {
                livereload: false,
            },
            styles: {
                files: ['scss/**/*.scss'], // which files to watch
                tasks: ['sass', 'w3c_css_validation' ],
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
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-w3c-css-validation');
    grunt.registerTask('sprites', ['svg_sprite', 'copy' ]);
    grunt.registerTask('default', ['clean', 'sprites', 'sass', 'w3c_css_validation', 'watch']);
}