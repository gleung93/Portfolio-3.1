module.exports = function(grunt) {

    "use strict";

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
          			cssDir: 'dist/assets/css',
          			sassDir: 'src/sass',
          			imagesDir: 'dist/assets/images',
          			relativeAssets: true,
          			outputStyle: 'compressed',
          			importPath: ['bower_components']
        		}
      		}
    	},
    	
 		vulcanize: {
    		default: {
      			options: {},
      			files: {
        			'dist/transition_build.html': 'src/polymer/nested.html'
      			},
    		},
  		},
        
    	copy: {
      		BootstrapCss: {
        		src: 'bower_components/bootstrap/dist/css/bootstrap.css',
        		dest: 'dist/assets/css/bootstrap.css',
      		},    		
      		 BootstrapCssMap: {
        		src: 'bower_components/bootstrap/dist/css/bootstrap.css.map',
        		dest: 'dist/assets/css/bootstrap.css.map',
      		},
      		BootstrapJs: {
        		src: 'bower_components/bootstrap/dist/js/bootstrap.js',
        		dest: 'dist/assets/js/bootstrap.js',
      		}

    	},
    	
    	concat: {
      		options: {
        		stripBanners: 'all',
        		separator: ';'
      		},
      		dist: {
        		src: ['src/js/*.js'],
        		dest: 'dist/js/portfolio.js'
      		}
   		},
        
    watch: {
      scripts: {
        files: ['src/data/*', 'src/*', 'src/modules/*', 'src/pages/*', 'dist/css/*', 'src/sass/*', 'src/js/*.js'],
        tasks: ["compass", "copy", 'assemble'],
        options: {
          spawn: false,
        },
      },
    },
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-vulcanize');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('assemble' );
    grunt.loadNpmTasks('grunt-contrib-compass');
    
    grunt.registerTask("build", ["compass", "copy", 'assemble']);
};