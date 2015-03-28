module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            enb: {
                command: 'node ./node_modules/enb/bin/enb make'
            }
        },
        copy: {
            blocks: {
                files: {
                    "out/": ["desktop.blocks/**/*"]
                }
            },
            bundles: {
                files: {
                    "out/": ["desktop.bundles/*/*.min.*"]
                }
            },
            cname: {
                files: {
                    "out/": ["./CNAME"]
                }
            }
        },
        watch: {
          css: {
            files: 'desktop.blocks/**/*.css',
            tasks: ['default'],
            options: {
              livereload: true,
            },
          },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['shell', 'copy']);
}
