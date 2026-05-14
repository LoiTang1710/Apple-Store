import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import fs from "fs";
import path from "path";

const sass = gulpSass(dartSass);

// 1. Debug: Liệt kê toàn bộ file trong thư mục src
export const debugSrc = (cb) => {
  console.log("\n=== DEBUG: Checking src directory ===");
  if (!fs.existsSync("src")) {
    console.error("❌ src directory does NOT exist!");
    return cb();
  }
  const walkSync = (dir, filelist = []) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walkSync(fullPath, filelist);
      } else {
        filelist.push(fullPath);
      }
    });
    return filelist;
  };
  const allFiles = walkSync("src");
  console.log(`📁 Found ${allFiles.length} files in src:`);
  allFiles.forEach((f) => console.log("   ", f));
  console.log("=== END DEBUG ===\n");
  cb();
};

// 2. Đảm bảo thư mục dist tồn tại (tạo ngay từ đầu)
export const ensureDist = (cb) => {
  if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist", { recursive: true });
    console.log("✅ Created empty dist directory");
  }
  cb();
};

// 3. Biên dịch Sass (có log chi tiết)
export const buildStyle = () => {
  console.log("🔍 Looking for SCSS files in: src/sass/**/*.scss");
  return gulp
    .src("src/sass/**/*.scss", { allowEmpty: true })
    .pipe(
      sass().on("error", (err) => {
        console.error("❌ Sass compilation error:", err.message);
        process.exit(1);
      }),
    )
    .pipe(gulp.dest("dist/css"))
    .on("data", (file) => console.log(`   📝 Written CSS: ${file.path}`))
    .on("end", () => console.log("✅ buildStyle finished"));
};

// 4. Copy tất cả file HTML (src/**/*.html)
export const copyHtml = () => {
  console.log("🔍 Looking for HTML files in: src/**/*.html");
  return gulp
    .src("src/**/*.html", { allowEmpty: true })
    .pipe(gulp.dest("dist"))
    .on("data", (file) => console.log(`   📄 Copied HTML: ${file.path} → dist`))
    .on("end", () => console.log("✅ copyHtml finished"));
};

// 5. Copy assets (fonts, img, js) nếu có
export const copyAssets = () => {
  const patterns = ["src/fonts/**/*", "src/img/**/*", "src/js/**/*"];
  console.log("🔍 Looking for assets:", patterns);
  return gulp
    .src(patterns, { base: "src", allowEmpty: true })
    .pipe(gulp.dest("dist"))
    .on("data", (file) => console.log(`   🖼️ Copied asset: ${file.path}`))
    .on("end", () => console.log("✅ copyAssets finished"));
};

// 6. Kiểm tra kết quả cuối cùng trong dist
export const checkDist = (cb) => {
  if (!fs.existsSync("dist")) {
    console.error("❌ ERROR: dist directory still does NOT exist after build!");
    return cb();
  }
  const walkSync = (dir, filelist = []) => {
    if (!fs.existsSync(dir)) return filelist;
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walkSync(fullPath, filelist);
      } else {
        filelist.push(fullPath);
      }
    });
    return filelist;
  };
  const distFiles = walkSync("dist");
  console.log(`\n📦 DIST directory contains ${distFiles.length} file(s):`);
  distFiles.forEach((f) => console.log("   ", f));
  if (distFiles.length === 0) {
    console.warn(
      "⚠️ WARNING: dist is empty! Vercel may fail if no index.html.",
    );
  }
  cb();
};

// Build sequence (chạy tuần tự)
const buildTask = gulp.series(
  debugSrc,
  ensureDist,
  buildStyle,
  copyHtml,
  copyAssets,
  checkDist,
);

export { buildTask as build };
export default buildTask;
export const copyToPublic = () => {
  return gulp.src("dist/**/*").pipe(gulp.dest("public"));
};
const buildTask = gulp.series(
  debugSrc,
  ensureDist,
  buildStyle,
  copyHtml,
  copyAssets,
  copyToPublic,
);