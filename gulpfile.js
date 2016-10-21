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
gulp.task('default', function(callback) {
	console.log("Running gulpfile.default()");
	//console.log("No Tasks currently in gulpfile.default()!");
	runSequence('useref', 'fonts', 'images', 'js', callback);

});

//Concat and minification of CSS/JS
gulp.task('useref', function() {
	console.log("Running gulpfile.useref()");
	return gulp.src('app/*.html')
		.pipe(useref())
		//Minifies if Javascript
		//.pipe(gulpIf('*.js', uglify()))
		//Minifies if CSS
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist/'));
});

/*--Tasks that add other files that are not processed--*/
//Fonts
gulp.task('fonts', function() {
	console.log("Running gulpfile.fonts()");
	return gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts/'));
})

//Images
gulp.task('images', function() {
	console.log("Running gulpfile.images()");
	return gulp.src('app/img/*')
		.pipe(gulp.dest('dist/img/'));
})

//js !!Temporary!!
gulp.task('js', function() {
	console.log("Running gulpfile.js()");
	return gulp.src('app/js/*')
		.pipe(gulp.dest('dist/js/'));
})