/*eslint-env node */

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
// var jasmine = require('gulp-jasmine-phantom');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('default', ['copy-html', 'styles', 'lint', 'scripts'], function() {
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('js/**/*.js', ['lint']);
	gulp.watch('js/**/*.js', ['scripts']);
	gulp.watch('./index.html', ['copy-html']);
	gulp.watch('./dist/index.html').on('change', browserSync.reload);
	gulp.watch('./dist/js/all.js').on('change', browserSync.reload);

	browserSync.init({
		server:'./dist'
	});
});

gulp.task('dist', [
	'copy-html',
	'styles',
	'lint',
	'scripts-dist'
]);

gulp.task('scripts', function() {
	gulp.src('js/**/*.js')
		.pipe(babel())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('scripts-dist', function() {
	gulp.src('js/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/js')),
	gulp.src('img/*')
		.pipe(imagemin({
			progressive: true,
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/img'));
	gulp.src('js/**/*.js')
		.pipe(babel())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('lint', function(){
	return gulp.src(['js/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});

gulp.task('copy-html', function() {
	gulp.src('./index.html')
		.pipe(gulp.dest('./dist'));
});

gulp.task('styles', function(done) {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
	done();
});

// gulp.task('tests', function(){
// 	gulp.src('tests/spec/extraSpec.js')
// 		.pipe(jasmine({
// 			// integration: true,
// 			vendor: 'js/**/*.js'
// 		}));
// });