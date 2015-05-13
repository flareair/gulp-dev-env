var gulp = require('gulp'),
  less = require('gulp-less'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  connect = require('gulp-connect');


gulp.task('styles', function() {
  return gulp.src('less/main.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('public/static/'))
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src('js/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('public/static/'))
    .pipe(uglify())
    .pipe(gulp.dest('public/static/'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('public/*.html')
    .pipe(connect.reload());
});


gulp.task('watch', function() {

  gulp.watch('less/**/*.less', ['styles']);
  gulp.watch('js/**/*.js', ['scripts']);
  gulp.watch('public/**/*.html', ['html']);

});

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('default', function() {
  gulp.start('styles', 'scripts');
});

gulp.task('serve', function() {
  gulp.start('connect', 'watch');
});