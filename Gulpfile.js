var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var environments = require('gulp-environments');
var runSequence = require('run-sequence');

var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

var development = environments.development;
var production = environments.production;


gulp.task('styles', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
		.pipe(production(sass({outputStyle: 'compressed'})))
		.pipe(development(sass({outputStyle: 'expanded'})))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('compress', function() {
	return gulp.src('js/**/*.js')
		.pipe(production(uglify()))
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest('./dist/js/'))
});


gulp.task('default',function() {
	runSequence('styles', 'compress');
	gulp.watch('scss/**/*.scss',['styles']);
	gulp.watch('js/**/*.js',['compress']);
});
