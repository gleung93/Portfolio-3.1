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
  			},
        grid: {
          options: {
              layout: "src/grid-layout.hbs"
          },
          files: [{
              expand: true,
              cwd: 'src/pages',
                src: ['projects.hbs'],
                dest: 'dist/'
          }]
        },
		  },

      sass: {
        dist: {
          files: {
            'dist/assets/css/leungportfolio.css': 'src/sass/leungportfolio.sass',
            'dist/assets/css/bootstrap.css': 'bower_components/bootstrap-sass/assets/stylesheets/bootstrap.scss'
          }
        }
      },
        
    	copy: {
      		JQuery: {
        		src: 'src/js/jquery.min.js',
        		dest: 'dist/assets/js/jquery.min.js',
      		},

          BootstrapJs: {
            src: 'bower_components/bootstrap/dist/js/bootstrap.js',
            dest: 'dist/assets/js/bootstrap.js',
          },

      		SkrollrJs: {
        		src: 'src/js/skrollr.min.js',
        		dest: 'dist/assets/js/skrollr.min.js',
      		}

    	},
    	
    	concat: {
      		options: {
        		stripBanners: 'all',
        		separator: ';'
      		},
      		dist: {
        		src: ['src/js/*.js'],
        		dest: 'dist/assets/js/portfolio.js'
      		},
   		},
        
    watch: {
      scripts: {
        files: ['src/data/*', 'src/*', 'src/modules/*', 'src/pages/*', 'dist/css/*', 'src/sass/*', 'src/js/*.js'],
        tasks: ['sass', 'assemble','concat', 'copy'],
        options: {
          spawn: false,
        },
      },
    },
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    grunt.registerTask("build", ['sass', 'assemble', 'concat', 'copy']);
};