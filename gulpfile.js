const gulp = require("gulp");
const browserify = require("browserify");
const source = require('vinyl-source-stream');
const tsify = require("tsify");
const gutil = require("gulp-util");
const paths = {
    pages: ['src/*.html']
};
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('html', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task('css', function () {
    gulp.src('./src/css/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(sourcemaps.write('./'))

        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('js', function () {
    browserify({
        basedir: '.',
        debug: true,
        entries: ['src/js/index.ts'],
        cache: {},
        packageCache: {}
    }).plugin(tsify);
});

const htmlWatcher = gulp.watch('src/index.html', ['html']);
const cssWatcher = gulp.watch('src/css/*.scss', ['css']);
const jsWatcher = gulp.watch('src/js/*.ts', ['js']);

gulp.task("default", function () { });
