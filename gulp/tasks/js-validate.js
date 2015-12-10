var gulp = require('gulp');
var cache = require('gulp-cached');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('gulp-jscs-stylish');
var noop = function() {};

module.exports = function(patterns) {
    return function() {
        return gulp.src(patterns)
            .pipe(cache('validate-js'))
            .pipe(jshint())
            .pipe(jscs({ configPath: '.jscsrc' }))
            .on('error', noop)
            .pipe(stylish.combineWithHintResults())
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(jshint.reporter('fail'));
    };
};
