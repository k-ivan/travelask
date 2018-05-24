const gulp     = require('gulp');
const prettify = require('gulp-prettify');
const plumber  = require('gulp-plumber');
const config   = require('../config');

gulp.task('html', () => {
  return gulp.src(`${config.src.html}/*.html`)
    .pipe(plumber())
    .pipe(prettify({
      indent_size: 2,
      wrap_attributes: 'auto', // 'force'
      preserve_newlines: false,
      unformatted: ['pre', 'code'],
      end_with_newline: true
    }))
    .pipe(gulp.dest(config.dest.root))
});

gulp.task('html:watch', () => {
  gulp.watch(`${config.src.html}/**/*.html`, ['html']);
});
