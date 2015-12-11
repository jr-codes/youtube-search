var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var size = require('gulp-size');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var globby = require('globby');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var merge = require('merge-stream');

var browserify = require('browserify');
var watchify = require('watchify');

var path = require('path');
var _ = require('lodash');

var browserifyStream = function(opts) {
    var defaultOpts = {
        require: [],
        external: [],
        filename: path.basename(opts.file),
        debug: opts.showSourceMaps
    };

    _.defaults(opts, defaultOpts, watchify.args);

    var b = browserify(opts.file, opts);
    var bundle = function() {
        return b
            .bundle()
            .on('error', gutil.log)
            .pipe(source(opts.filename))
            .pipe(buffer())
            .pipe(gulpif(opts.showSourceMaps, sourcemaps.init({ loadMaps: true })))
            .pipe(gulpif(opts.showSize, size({ title: opts.filename })))
            .pipe(gulpif(opts.minify, uglify()))
            .pipe(gulpif(opts.minify && opts.showSize, size({ title: opts.filename })))
            .pipe(gulpif(opts.showSize, size({ title: opts.filename, gzip: true })))
            .pipe(gulpif(opts.showSourceMaps, sourcemaps.write('./')))
            .pipe(gulp.dest(opts.dest));
    };

    b.require(opts.require);
    b.external(opts.external);

    if (opts.watch) {
        b = watchify(b);
        b.on('update', bundle);
    }

    return bundle();
};

module.exports = function(opts) {
    return function() {
        var files = globby.sync(opts.src);
        var streams = files.map(function(file) {
            opts.file = file;
            return browserifyStream(opts);
        });

        return merge.apply(null, streams);
    };
};
