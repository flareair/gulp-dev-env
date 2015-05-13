var gulp = require('gulp'),
  less = require('gulp-less'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  livereload = require('gulp-livereload');


gulp.task('styles', function() {
  return gulp.src('less/main.less')
    .pipe(less())
    .pipe(gulp.dest('public/static/'));
});