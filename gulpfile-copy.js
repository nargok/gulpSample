var gulp = require("gulp");

gulp.task("copy", () => {
  gulp.src("./src/sample1.txt") // コピー元
  .pipe(gulp.dest("./dist")); // コピー先
});

gulp.task("default", ["copy"]);