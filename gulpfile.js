var gulp = require('gulp');

var tasks = require('./gulp/tasks');
var browserSync = require('./gulp/util/browser-sync');

var config = {
    minify: true,
    showSize: true,
    showSourceMaps: false
};

gulp.task('default', ['build', 'serve']);

gulp.task('clean', tasks.clean('dist/**/*'));

gulp.task('build', ['html', 'css', 'js']);

gulp.task('html', tasks.copy({
    src: 'src/*.html',
    dest: 'dist'
}));

gulp.task('css', tasks.css({
    src: 'src/styles/*.scss',
    dest: 'dist/styles',
    minify: config.minify,
    showSize: config.showSize,
    showSourceMaps: config.showSourceMaps
}));

gulp.task('js', tasks.js({
    src: 'src/scripts/*.js',
    dest: 'dist/scripts',
    minify: config.minify,
    showSize: config.showSize,
    showSourceMaps: config.showSourceMaps
}));

gulp.task('watch:js', tasks.js({
    src: 'src/scripts/*.js',
    dest: 'dist/scripts',
    minify: config.minify,
    showSize: config.showSize,
    watch: true
}));

gulp.task('serve', ['build', 'watch'], tasks.serve('dist'));

gulp.task('watch', ['watch:js'], function() {
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/styles/**/*.scss', ['css']);
    gulp.watch('dist/**/*.{html,js}').on('change', browserSync.reload);
});
