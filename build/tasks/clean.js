var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('clean', function() {
  return gulp.src(['../../dist'])
    .pipe(vinylPaths(del));
});