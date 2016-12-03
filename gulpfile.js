var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var nib = require('nib');
var historyApiFallback = require('connect-history-api-fallback');
var directorio = {

  jade: 'app/templates/jade/*.jade',
  jade_blocks: 'app/templates/jade/**/*.jade',
  stylus: 'app/static/stylus/*.styl',
  stylus_blocks: 'app/static/stylus/**/*.styl',


};

gulp.task('stylus', function () {
  gulp.src(directorio.stylus)
    .pipe(plumber())
    .pipe(stylus({
      use: nib(),
      compress: true

      }))
    .pipe(gulp.dest('app/static/css/'))
    .pipe(connect.reload());

});
gulp.task('stylus_blocks', () => {
  return gulp.src(directorio.stylus_blocks)
    .pipe(plumber())
    .pipe(stylus({
      use: nib()
    }))
    .pipe(gulp.dest('app/static/css/'))
    .pipe(connect.reload())
});

gulp.task('templates', function() {

  return gulp.src(directorio.jade)
    .pipe(plumber())
    .pipe(jade({
      pretty: true
      }))
    .pipe(gulp.dest('app/templates/html'))
    .pipe(connect.reload());


});
gulp.task('templates_blocks', function() {

  return gulp.src(directorio.jade_blocks)
    .pipe(plumber())
    .pipe(jade({
      pretty: true
      }))
    .pipe(gulp.dest('app/templates/html'))
    .pipe(connect.reload());


});
gulp.task('watch', function() {

	gulp.watch('app/static/stylus/*.styl', ['stylus']),
	gulp.watch('app/templates/jade/*.jade', ['templates'])
  gulp.watch(directorio.stylus_blocks, ['stylus_blocks'])
  gulp.watch(directorio.jade_blocks, ['templates_blocks'])
});

//creacioon  del server para el livereload

gulp.task('connect', function() {
  connect.server({
    root: 'app/',
    hostname: '0.0.0.0',
    livereload: true,
    port: '3000',
    open: true,
    middleware: function(connect, opt) {
      return [ historyApiFallback() ];
    }
  });
});
gulp.task('default', ['stylus', 'templates', 'templates_blocks', 'stylus_blocks','watch', 'connect']);
//creacioon  del server para el livereload
