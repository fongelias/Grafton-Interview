//gulpfile.js
//Require Gulp
var gulp = require('gulp');
//Require AddOns
var gulpIf = require('gulp-if');
var runSequence = require('run-sequence');
//CSS/JS concat and minification
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');


//Default Method
gulp.task('default', function() {
  console.log("No Tasks currently in gulpfile.default()!")
});

//Concat and minification of CSS/JS
gulp.task('useref', function() {
	return gulp.src('app/*.html')
		.pipe(useref())
		//Minifies if Javascript
		.pipe(gulpIf('*.js', uglify()))
		//Minifies if CSS
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist/'));
});