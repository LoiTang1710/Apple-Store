import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import fs from "fs";
import path from "path";

const { series, parallel, watch } = gulp;
const sass = gulpSass(dartSass);

// --- CÁC NHIỆM VỤ HỖ TRỢ (UTILITIES) ---

// Debug: liệt kê toàn bộ file trong src để kiểm tra đường dẫn trên server
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

// Đảm bảo thư mục dist tồn tại
export const ensureDist = (cb) => {
  if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist", { recursive: true });
    console.log("✅ Created empty dist directory");
  }
  cb();
};

// --- CÁC NHIỆM VỤ BIÊN DỊCH VÀ COPY ---

// Biên dịch SCSS thành CSS
export const buildStyle = () => {
  console.log("🔍 Looking for SCSS files in: src/sass/**/*.scss");
  return gulp
    .src("src/sass/**/*.scss", { allowEmpty: true })
    .pipe(
      sass().on("error", (err) => {
        console.error("❌ Sass error:", err.message);
        // Không dừng tiến trình khi đang ở mode dev, nhưng dừng nếu là mode build
        if (process.env.NODE_ENV === "production") process.exit(1);
      }),
    )
    .pipe(gulp.dest("dist/css"))
    .on("data", (file) =>
      console.log(`   📝 Written CSS: ${path.basename(file.path)}`),
    )
    .on("end", () => console.log("✅ buildStyle finished"));
};

// Copy các file HTML từ src sang dist
export const copyHtml = () => {
  return gulp
    .src("src/**/*.html", { allowEmpty: true })
    .pipe(gulp.dest("dist"))
    .on("end", () => console.log("✅ copyHtml finished"));
};

// Copy assets (fonts, img, js) giữ nguyên cấu trúc thư mục
export const copyAssets = () => {
  const patterns = ["src/fonts/**/*", "src/img/**/*", "src/js/**/*"];
  return gulp
    .src(patterns, { base: "src", allowEmpty: true })
    .pipe(gulp.dest("dist"))
    .on("end", () => console.log("✅ copyAssets finished"));
};

// Kiểm tra nội dung thư mục dist sau khi build hoàn tất
export const checkDist = (cb) => {
  if (!fs.existsSync("dist")) {
    console.error("❌ ERROR: dist directory does NOT exist after build!");
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
  cb();
};

// --- CẤU HÌNH CHO MÔI TRƯỜNG DEVELOPMENT ---

// Theo dõi sự thay đổi của file và tự động chạy lại task tương ứng
export const watchFiles = () => {
  console.log("\n👀 Watching for changes in src/...");
  watch("src/sass/**/*.scss", buildStyle);
  watch("src/**/*.html", copyHtml);
  watch(["src/img/**/*", "src/js/**/*", "src/fonts/**/*"], copyAssets);
};

// --- KHAI BÁO CÁC LỆNH CHÍNH ---

// Lệnh: npm run build (Dành cho Production - Vercel/Render)
export const build = series(
  debugSrc,
  ensureDist,
  parallel(buildStyle, copyHtml, copyAssets),
  checkDist,
);

// Lệnh: npm run dev (Dành cho Local Development)
export const dev = series(
  build, // Build lần đầu để tạo file trong dist
  watchFiles, // Bắt đầu theo dõi thay đổi
);

// Mặc định chạy lệnh build
export default build;
