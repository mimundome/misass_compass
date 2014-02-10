module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify:{
			my_traget:{
				files:{
					'_/js/script.js': ['_/components/js/*.js']
				}//Assign folder
			}//assign target
		},//uglify
		compass: {
			dev:{
				options:{
					config: 'config.rb'
				}//options
			}//dev
		},//compass
		watch: {
			options: { livereload: true },
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']
			},//watch scripts
			sass: {
				files: ['_/components/sass/*.scss'],
				tasks: ['compass:dev']
			},//watch css
			html:{
				files: ['*.html']
			}//watch HTML
		}//watch
	})//initconfig
	grunt.registerTask('default', 'watch');
}// exports