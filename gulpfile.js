/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

var fs          = require('fs');
var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat');


/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
fs.readdirSync('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 * Javascript Task
 */
gulp.task('js', function(){
	return gulp.src('bower_components/**/*.js')
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js/'))
		.pipe(browserSync.reload({stream:true}));
});


/**
 * Rebuild Virtual & do page reload
 */
// gulp.task('virtual-rebuild', function () {
// 	browserSync.reload();
// });


/**
 * Watch JS files for changes & recompile
 */
gulp.task('watch', function () {
  gulp.watch('bower_components/**/*.js', ['js']);
});

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['js'], function () {
  gulp.start('build');
});