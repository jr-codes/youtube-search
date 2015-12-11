var gulp = require('gulp');
var gulpif = require('gulp-if');
var minify = require('gulp-minify-css');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var size = require('gulp-size');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var browserSync = require('../util/browser-sync');

module.exports = function(opts) {
    return function() {
        return gulp.src(opts.src)
            .pipe(gulpif(opts.showSourceMaps, sourcemaps.init({ loadMaps: true })))
            .pipe(sass().on('error', sass.logError))
            .pipe(postcss([
                autoprefixer({ browsers: ['last 2 versions'] })
            ]))
            .pipe(gulpif(opts.showSize, size({ title: 'css' })))
            .pipe(gulpif(opts.minify, minify({ restructuring: false })))
            .pipe(gulpif(opts.minify && opts.showSize, size({ title: 'css' })))
            .pipe(gulpif(opts.showSize, size({ title: 'css', gzip: true })))
            .pipe(gulpif(opts.showSourceMaps, sourcemaps.write('./')))
            .pipe(gulp.dest(opts.dest))
            .pipe(browserSync.stream());
    };
};
