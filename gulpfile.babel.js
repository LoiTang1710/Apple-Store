import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import fs from "fs";

const sass = gulpSass(dartSass);

// Helper: log file được copy
function logFiles(path, label) {
  console.log(`✅ ${label}: ${path}`);
}

// 0. Đảm bảo thư mục dist tồn tại (tạo rỗng)
export const ensureDist = (cb) => {
  if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist", { recursive: true });
    console.log("📁 Created dist directory");
  }
  cb();
};

// 1. Biên dịch Sass -> dist/css
export const buildStyle = () => {
  return gulp
    .src("src/sass/**/*.scss", { allowEmpty: true })
    .pipe(
      sass().on("error", (err) => {
        console.error("❌ Sass error:", err.message);
        process.exit(1); // Dừng build nếu Sass lỗi
      }),
    )
    .pipe(gulp.dest("dist/css"))
    .on("end", () => console.log("🎨 Compiled CSS to dist/css"));
};

// 2. Copy HTML (tất cả .html trong src và các thư mục con)
export const copyHtml = () => {
  return gulp
    .src("src/**/*.html", { allowEmpty: true })
    .pipe(gulp.dest("dist"))
    .on("data", (file) => logFiles(file.path, "📄 Copied HTML"));
};

// 3. Copy assets (fonts, img, js) – bỏ qua nếu thư mục không tồn tại
export const copyAssets = () => {
  const patterns = ["src/fonts/**/*", "src/img/**/*", "src/js/**/*"];
  return gulp
    .src(patterns, { base: "src", allowEmpty: true })
    .pipe(gulp.dest("dist"))
    .on("data", (file) => logFiles(file.path, "🖼️ Copied asset"));
};

// 4. Task build chính (chạy tuần tự)
const buildTask = gulp.series(ensureDist, buildStyle, copyHtml, copyAssets);

// 5. Watch (cho môi trường phát triển cục bộ)
export const watch = () => {
  gulp.watch("src/sass/**/*.scss", buildStyle);
  gulp.watch("src/**/*.html", copyHtml);
  gulp.watch(["src/fonts/**/*", "src/img/**/*", "src/js/**/*"], copyAssets);
};

const defaultTask = gulp.series(buildTask, watch);

export { buildTask as build };
export default defaultTask;
