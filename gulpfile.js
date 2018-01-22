const gulp = require('gulp')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin')

// the default task
gulp.task('default', function() {
    gulp.src('./node_modules/tachyons-sass/**/*.scss')
      .pipe(sass())
      .pipe(concat('_all.scss'))
      .pipe(gulp.dest('./_sass/'));

  gulp.src('img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img/'))
})
