// Gulp
var gulp = require('gulp');

// Debug plugins
var plumber      = require("gulp-plumber");

// Other plugins
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify       = require('gulp-minify-css');
var uglify       = require('gulp-uglify');
var rename       = require('gulp-rename');

// Paths
var source = './assets/';

// Prod
gulp.task('default', ['css', 'js']);

// Watch (dev)
gulp.task('watch', function () {
    gulp.watch(source + '/css/**/*.scss', ['css']);
    gulp.watch(source + '/js/app.js', ['js']);
});

// CSS
gulp.task('css', function() {
    return gulp.src(source + '/css/**/[^_]*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 1%', 'Explorer 7', 'Android >= 2', 'Safari > 3'],
        }))
        .pipe(minify())
        .pipe(rename({
            basename: 'dist',
            extname: '.css'
        }))
        .pipe(gulp.dest(source));
});

// JS
gulp.task('js', function() {
    return gulp.src([
            source + 'js/app.js'
        ])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({
            basename: 'dist',
            extname: '.js'
        }))
        .pipe(gulp.dest(source));
});