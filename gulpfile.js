'use strict';

var gulp = require('gulp'),
	del = require('del'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	maps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	cleancss = require('gulp-clean-css'),
	htmlreplace = require('gulp-html-replace'),
	autoprefixer = require('gulp-autoprefixer'),
	browsersync = require('browser-sync').create();

// JS tasks
function concatJs() {
	return gulp.src([
			'./node_modules/jquery/dist/jquery.min.js',
			'./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
			'./node_modules/jquery.easing/jquery.easing.min.js',
			'./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
			'./node_modules/waypoints/lib/jquery.waypoints.min.js',
			'./js/functions.js'
		])
		.pipe(maps.init())
		.pipe(concat('main.js'))
		.pipe(maps.write('./'))
		.pipe(gulp.dest('./js'))
		.pipe(browsersync.stream());
}

// CSS tasks
function compileSass() {
	return gulp.src('./css/scss/main.scss')
		.pipe(maps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(maps.write('./'))
		.pipe(gulp.dest('./css'))
		.pipe(browsersync.stream());
}

// Dist tasks
function cleanDist() {
	return del('./dist**');
}

function build() {
	return gulp.src([
			'./img/**/*'
		], {
			base: './'
		})
		.pipe(gulp.dest('./dist'));
}

function renameSources() {
	return gulp.src('./*.html')
		.pipe(htmlreplace({
			'js': 'js/main.min.js',
			'css': 'css/main.min.css'
		}))
		.pipe(gulp.dest('./dist'));
}

function minifyCss() {
	return gulp.src('./css/main.css')
		.pipe(cleancss())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest('./dist/css'));
}

function minifyJs() {
	return gulp.src('./js/main.js')
		.pipe(uglify())
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest('./dist/js'));
}

gulp.task('dist', gulp.series(cleanDist, build, renameSources, compileSass, minifyCss, concatJs, minifyJs));

// Default task
gulp.task('default', gulp.series(compileSass, concatJs));

// Dev tasks
function watch () {
	browsersync.init({
		server: './'
	});
	gulp.watch('./css/scss/**/*.scss', gulp.series(compileSass));
	gulp.watch(["./js/**/*.js", "!./js/main.js", '!./js/*.map'], concatJs);
	gulp.watch('./**/*.html').on('change', browsersync.reload);
}

gulp.task('dev', gulp.series('default', watch));
