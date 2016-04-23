var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('webpack:build-dev', ['copy:dist'], buildDev);
gulp.task('webpack:build-js', buildJs);
gulp.task('copy:dist', copyDist);

gulp.task('default', ['copy:dist', 'webpack:build-dev']);
gulp.task('watch', ['default'], watch);

function copyDist() {
  gulp.src([
    './src/index.html',
    './src/main.css',
  ]).pipe(gulp.dest('./dist/'));
}

function buildJs() {
  return gulp.src('./src/js/*.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist/js/'));
}

function buildDev() {
  return gulp.src([
    './src/js/*.js',
    './src/*.js'
  ])
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist/'));
}

function watch() {
  gulp.watch(['./src/*.js', './src/js/*.js'], ['webpack:build-dev']);
  gulp.watch(['./src/*.*'], ['copy:dist']);
}
