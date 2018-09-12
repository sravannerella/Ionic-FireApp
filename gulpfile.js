var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    templateCache = require('gulp-angular-templatecache');

var paths = {
  sass: ['./scss/**/*.scss', './app/styles/**/**.scss'],
  template: ['./app/templates/**/*.html'],
  fonts: ['./app/fonts/**/*.ttf'],
  scripts: ['./app/js/**/*.js'],
  vendor: ['./node_modules/angularfire/dist/*.min.js', './node_modules/firebase/firebase.js']
};

gulp.task('default', ['fonts', 'sass', 'template', 'controllers', 'vendor']);

gulp.task('sass', (done) => {
  gulp.src(paths.sass)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./www/css/'))
    .pipe(cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('controllers', (data)=> {
    gulp.src(paths.scripts)
      .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('www/js'));
})

gulp.task('template', (data) => {
    gulp.src(paths.template)
      .pipe(templateCache({standalone: false, module: 'fireApp'}))
      .pipe(gulp.dest('www/js/'));
});

gulp.task('vendor', ()=> {
    gulp.src(paths.vendor)
      .pipe(sourcemaps.init())
      .pipe(concat('vendor.js'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('www/js/'));
})

gulp.task('fonts', (data) => {
    gulp.src(paths.fonts)
      .pipe(gulp.dest('www/fonts/'));
});

gulp.task('watch', ['sass'], () => {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.tempalte, ['template']);
});
