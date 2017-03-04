var
  // modules
  gulp = require('gulp'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  stripdebug = require('gulp-strip-debug'),
  htmlclean = require('gulp-htmlclean'),
  cssnano = require('gulp-cssnano'),


  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/',
    build: 'docs/',
    bower: 'bower_components/'
  }
;


gulp.task('default', ['html', 'css', 'images', 'sass', 'js']);


gulp.task('watch', function() {
  gulp.watch(folder.src + 'images/*', ['images']);
  gulp.watch(folder.src + 'html/*', ['html']);
  gulp.watch(folder.src + 'css/*', ['css']);
  gulp.watch(folder.src + 'sass/*', ['sass']);
  gulp.watch(folder.src + 'js/*', ['js']);
});


gulp.task('js', function() {

  var jsbuild = gulp.src([folder.src + 'js/*', folder.bower + 'zenscroll/zenscroll.js'])
    .pipe(concat('main.js'));

  if (!devBuild) {
    jsbuild = jsbuild
      .pipe(stripdebug())
      .pipe(uglify());
  }

  return jsbuild.pipe(gulp.dest(folder.build + 'js/'));
});


gulp.task('sass', function () {
  return gulp
    // Find all sass files from the folder
    .src(folder.src + 'sass/milligram_theme.sass')
    // Run Sass on those files
    .pipe(sass({
        includePaths: ['bower_components/milligram-sass/dist/']
    }))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(folder.build + 'css/'));
});


gulp.task('html', function() {
  var
    page = gulp.src(folder.src + 'html/*')
      .pipe(newer(folder.build));

  // minify production code
  if (!devBuild) {
    page = page.pipe(htmlclean());
  }

  return page.pipe(gulp.dest(folder.build));
});


gulp.task('images', function() {
  var out = folder.build + 'images/';
  return gulp.src(folder.src + 'images/*')
    .pipe(newer(out))
    .pipe(imagemin())
    .pipe(gulp.dest(out));
});


gulp.task('css', function() {
  var css = gulp.src([folder.bower + 'normalize.css/normalize.css', folder.bower + 'minimal-devices/css/*', folder.src + 'css/*'])
  .pipe(concat('all.css'));

  if (!devBuild) {
    css = css.pipe(cssnano());
  }

  return css.pipe(gulp.dest(folder.build + 'css/'));

});
