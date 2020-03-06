const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('heloo', function(done) {
   console.logo('Привет, мир!');
   done();
})

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});
