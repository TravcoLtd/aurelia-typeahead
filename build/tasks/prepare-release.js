var gulp = require('gulp');
var runSequence = require('run-sequence');
var fs = require('fs');
var bump = require('gulp-bump');
var args = require('../args');

gulp.task('bump-version', function(){
  return gulp.src(['./package.json', './bower.json'])
    .pipe(bump({type:args.bump }))
    .pipe(gulp.dest('./'));
});

gulp.task('default', function(callback){
  return runSequence(
	'clean',
    'build',
    'lint',
    'bump-version',
    callback
  );
});