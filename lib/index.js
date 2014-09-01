'use strict';

var size = require('gulp-size');

// store a local reference to our parameters
var gulp = null;
var config = null;

/**
 * Attaches the size task to the gulp instance
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration options
 */
function sizeSetup(gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('size', false, ['soften'], sizeTask);
}

/**
 * Runs the size task
 */
function sizeTask() {
  return gulp.src(config.src)
    .pipe(size({showFiles: true}));
}

module.exports = sizeSetup;
