import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from 'sass'
const sass = gulpSass(dartSass)

export const buildStyle = () => {
  return gulp.src("src/sass/**/*.scss").pipe(sass().on('err', sass.logError)).pipe(gulp.dest('dist/css'))
}
export const watch = () => {
  return gulp.watch("src/sass/**/*.scss",buildStyle);
}
export default gulp.series(buildStyle,watch)