module.exports = function(grunt) {

    "use strict";

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.initConfig({

        sass: {

            dev : {
                options: {
                    style: "compressed",
                    sourcemap : true
                },

                files: {
                    "dist/css/app.min.css": "src/scss/app.scss"
                }
            }
        },

        uglify : {

            dev : {
                options : {
                    //compress : true,
                    mangle : true,
                    preserveComments : false
                },

                files: {
                    "dist/js/app.min.js" : ["src/js/libs/atomic.js", "src/js/app/app.js"]
                }
            }
        }
    });
    grunt.registerTask("build", ["sass:dev", "uglify:dev"]);
};