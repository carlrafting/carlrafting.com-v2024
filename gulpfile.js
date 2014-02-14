var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var livereload = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();

gulp.task('minify', function () {
  return gulp.src('css/global.css')
    .pipe(csso())
    .pipe(rename('global.min.css'))
    .pipe(gulp.dest('css/'))
    .pipe(livereload(server));
});

gulp.task('watch', function () {
  server.listen(4444, function (err) {
    if (err) return console.log(err);
    
    gulp.watch('css/**', function () {
      gulp.run('minify');
    });
  });
});

gulp.task('default', function (){
  gulp.run('watch');
});