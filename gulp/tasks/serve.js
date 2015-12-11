var browserSync = require('../util/browser-sync');

module.exports = function(dir) {
    return function() {
        browserSync.init({
            server: {
                baseDir: dir,
                directory: false
            },
            ghostMode: false,
            notify: false
        });
    };
};
