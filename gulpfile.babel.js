import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";

const sass = gulpSass(dartSass);

// 1. Biên dịch Sass -> CSS
export const buildStyle = () => {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
};

// 2. Copy toàn bộ các file HTML từ src ra dist
export const copyHtml = () => {
  return gulp.src("src/*.html").pipe(gulp.dest("dist"));
};

// 3. Copy các thư mục Assets (fonts, img, js) từ src ra dist
export const copyAssets = () => {
  return gulp
    .src(["src/fonts/**/*", "src/img/**/*", "src/js/**/*"], { base: "src" })
    .pipe(gulp.dest("dist"));
};

// 4. Task Watch (dùng khi code ở máy)
export const watch = () => {
  gulp.watch("src/sass/**/*.scss", buildStyle);
  gulp.watch("src/*.html", copyHtml);
  gulp.watch(["src/fonts/**/*", "src/img/**/*", "src/js/**/*"], copyAssets);
};

// 5. TASK BUILD CHÍNH (Netlify sẽ chạy cái này)
export const build = gulp.series(
  buildStyle,
  gulp.parallel(copyHtml, copyAssets),
);

// 6. Task default
export default gulp.series(build, watch);
