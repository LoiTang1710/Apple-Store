import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";

const sass = gulpSass(dartSass);

// 1. Task biên dịch Sass -> CSS vào dist/css
export const buildStyle = () => {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
};

// 2. Task copy file HTML từ src vào dist
export const copyHtml = () => {
  return gulp
    .src("src/*.html") // Tìm file html trong thư mục src
    .pipe(gulp.dest("dist")); // Đẩy vào thư mục dist
};

// 3. TASK COPY ẢNH VÀ CÁC THƯ MỤC KHÁC (img, js, fonts) VÀO DIST
// Chìa khóa nằm ở { base: "src" } - nó giúp giữ nguyên cấu trúc thư mục
export const copyAssets = () => {
  return gulp
    .src(["src/fonts/**/*", "src/img/**/*", "src/js/**/*"], { base: "src" })
    .pipe(gulp.dest("dist")); // Đẩy tất cả vào dist, ví dụ src/img/iPhone/ -> dist/img/iPhone/
};

// 4. Task Watch (dùng khi code ở máy)
export const watch = () => {
  gulp.watch("src/sass/**/*.scss", buildStyle);
  gulp.watch("src/*.html", copyHtml);
  gulp.watch(["src/fonts/**/*", "src/img/**/*", "src/js/**/*"], copyAssets); // Watch cả thay đổi ảnh/js
};

// 5. TASK BUILD CHÍNH (Đảm bảo chạy cả build CSS và copy assets)
// Tạo một task chuyên dành cho việc Build trên Vercel (Bỏ watch ra)
const buildTask = gulp.series(buildStyle, copyHtml, copyAssets);

// Tạo task mặc định (dùng cho máy tính ở nhà, có watch)
const defaultTask = gulp.series(buildTask, watch);

// Export chúng ra
export { buildTask as build };
export default defaultTask;
