gulp = require('gulp');
concat = require('gulp-concat');
sass = require('gulp-sass');

// the default task
gulp.task('default', function() {
    return gulp.src('./node_modules/tachyons-sass/**/*.scss')
      .pipe(sass())
      .pipe(concat('_all.scss'))
      .pipe(gulp.dest('./_sass/'));
});
