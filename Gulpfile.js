var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var environments = require('gulp-environments');
var runSequence = require('run-sequence');

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


gulp.task('default',function() {
	runSequence('styles');
	gulp.watch('scss/**/*.scss',['styles']);
});
