var gulp = require('gulp'),
  less = require('gulp-less'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  rename = require('gulp-rename');


gulp.task('styles', function() {
  return gulp.src('less/main.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('public/static/'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
  return gulp.src('js/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('public/static/'))
    .pipe(uglify())
    .pipe(gulp.dest('public/static/'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('default', function() {
  gulp.start('styles', 'scripts');
});

gulp.task('watch', function() {

  gulp.watch('less/**/*.less', ['styles']);
  gulp.watch('js/**/*.js', ['scripts']);

});