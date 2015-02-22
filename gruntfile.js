module.exports = function(grunt) {

    "use strict";

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.initConfig({
    
   		assemble: {
  			options: {
   			assets: "path/to/assets",
    		data:   "src/data/*.{json,yml}",
    		partials: "src/modules/*.hbs"
 			},
 			project: {
    			options: {
      				layout: "src/default-layout.hbs"
    			},
    			files: [{
         			expand: true,
         			cwd: 'src/pages',
          			src: ['*.hbs'],
          			dest: 'dist/'
   				}]
  			}
		},

    	compass: {
      		dist: {
        		options: {
         			environment: 'production',
          			httpPath: 'dist/',
          			cssDir: 'dist/css',
          			sassDir: 'src/sass',
          			imagesDir: 'dist/assets',
          			relativeAssets: true,
          			outputStyle: 'compressed',
          			importPath: ['bower_components']
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
        },
        
    watch: {
      scripts: {
        files: ['src/data/*', 'src/*', 'src/modules/*', 'src/pages/*', 'dist/css/*', 'src/sass/*', 'src/js/*.js'],
        tasks: ["compass", "uglify:dev", 'assemble'],
        options: {
          spawn: false,
        },
      },
    },
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('assemble' );
    grunt.loadNpmTasks('grunt-contrib-compass');
    
    grunt.registerTask("build", ["compass", "uglify:dev", 'assemble']);
};