var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var compilerOptions = require('../babel-options');

var assign = Object.assign || require('object.assign');

gulp.task('build', function () {
  return gulp.src('./src/**/*.js')
    .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
    .pipe(gulp.dest('./dist'));
});