'use strict';

const gulp = require('gulp');
const tslint = require('gulp-tslint');
const shell = require('gulp-shell');
const del = require('del');
const vinylPaths = require('vinyl-paths');

/**
 * Remove build directory.
 */
gulp.task('clean', () => {
  return gulp.src('./build', { read: false, allowEmpty: true })
    .pipe(vinylPaths(del));
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
  return gulp.src('src/**/*.ts')
    .pipe(tslint({
      formatter: 'prose'
    }))
    .pipe(tslint.report());
});

/**
 * Compile TypeScript.
 */
gulp.task('compile', shell.task([
  'yarn tsc',
]))

/**
 * Watch for changes in TypeScript
 */
gulp.task('watch', shell.task([
  'yarn tsc-watch',
]))
/**
 * Copy config files
 */
gulp.task('configs', () => {
  return gulp.src("src/configurations/*.json")
    .pipe(gulp.dest('./build/src/configurations'));
});

/**
 * Copy env files
 */
gulp.task('env', () => {
  return gulp.src("./.env", { allowEmpty: true })
    .pipe(gulp.dest('./build'));
});
/**
 * Copy config files
 */

gulp.task('jsfiles', () => {
  return gulp.src('src/**/*.js',{sourcemaps:true})
    .pipe(gulp.dest('./build/src',{ sourcemaps: true}));
});

/**
 * Copy env files
 */
gulp.task('certificates', () => {
  return gulp.src("./src/configs/**", { allowEmpty: true })
    .pipe(gulp.dest('./build/src/configs'));
});

/**
 * Build the project.
 */
gulp.task('build', gulp.series(gulp.parallel('tslint','jsfiles', 'compile', 'configs', 'env', 'certificates')));

gulp.task('default', gulp.series('build', () => { }));