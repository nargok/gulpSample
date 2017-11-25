var gulp = require("gulp");
var concat = require("gulp-concat");
var sass = require("gulp-sass"); // npmでインストールが必要
var rename = require("gulp-rename");
// 1ファイルずつ、CSSに変換する
// gulp.task("sass", () => {
//   gulp.src("./src/*.scss")
//   .pipe(sass({ outputStyle: "expanded" })) // CSSに変換する
//   .pipe(gulp.dest("./dist"));
// });

// 2つのファイルを結合して圧縮する
gulp.task("sass", () => {
  gulp.src(["sample1.scss", "sample2.scss"], { cwd: "./src" })
  .pipe(concat("bundle.scss"))
  .pipe(sass({ outputStyle: "compressed" }))
  .pipe(rename({ suffix: ".min" }))
  .pipe(gulp.dest("./dist"));
});

gulp.task("default", ["sass"]);