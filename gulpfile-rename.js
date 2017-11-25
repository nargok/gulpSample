var gulp = require("gulp");
var rename = require("gulp-rename"); // npmでインストールが必要

gulp.task("rename", () => {
  gulp.src("./src/sample1.txt")
  // .pipe(rename("hoge.txt"))
  .pipe(rename({ suffix: ".min" })) // 元のファイル名に.minを付与する
  .pipe(gulp.dest("./dist"));
});

gulp.task("default", ["rename"]);