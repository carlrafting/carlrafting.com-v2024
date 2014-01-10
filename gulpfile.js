var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var csso = require('gulp-csso');

gulp.task('minify', function () {
  gulp.src('./css/global.css')
  .pipe(csso())
  .pipe(rename('global.min.css'))
  .pipe(gulp.dest('./css/'));
});

gulp.task('default', function (){
  // place code for your default task here
  
  gulp.run('minify');
});