var gulp = require('gulp');
var concat = require('gulp-concat');
var insert = require('gulp-insert');
var runSequence = require('run-sequence');

gulp.task('concat', function() {
    runSequence('makeUnits', 'addBrakets');
});

gulp.task('makeUnits', function() {
    return gulp.src('./necrons/**/*.json')
        .pipe(insert.append(','))
        .pipe(concat('necrons.json'))
        .pipe(gulp.dest('./out/'))
});

gulp.task('addBrakets', function() {
    return gulp.src('./out/necrons.json')
        .pipe(insert.prepend('['))
        .pipe(insert.append(']'))
        .pipe(gulp.dest('./out/'))
});