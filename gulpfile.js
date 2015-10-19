var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  gulp.src([
    'public/javascripts/app/app.js',
    'public/javascripts/app/**/*.js'
  ])
  .pipe(concat('asf.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/javascripts/build'));
});