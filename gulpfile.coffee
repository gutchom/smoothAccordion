gulp = require 'gulp'
$ = do require 'gulp-load-plugins'

SRC =
  SASS: 'src/sass'
  COFFEE: 'src/coffee/**/*.coffee'
  JADE: 'src/jade/**/*.jade'
  IMG: 'src/images/**'

DEST = 'demo'

gulp.task 'demo', [
  'jade'
  'sass'
  'coffee'
]
gulp.task 'plugin', ->
  gulp
  .src 'src/coffee/jquery.smoothAccordion.coffee'
  .pipe $.plumber()
  .pipe $.coffee()
  .pipe $.uglify()
  .pipe gulp.dest 'plugin'


gulp.task 'jade', ->
  gulp
    .src SRC.JADE
    .pipe $.plumber()
    .pipe $.jade()
    .pipe gulp.dest DEST

gulp.task 'sass', ->
  $.rubySass SRC.SASS
  .pipe $.pleeease
    fallbacks:
      autoprefixer: 'last 2 versions'
  .pipe gulp.dest DEST + '/css'

gulp.task 'coffee', ->
  gulp
    .src SRC.COFFEE
    .pipe $.plumber()
    .pipe $.coffee()
    .pipe gulp.dest DEST + '/js'
