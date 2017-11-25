var gulp = require("gulp");
var concat = require("gulp-concat"); // npmでインストールが必要

gulp.task("concat", () => {
  gulp.src(["sample1.txt", "sample2.txt"], { cwd: "./src"})
  .pipe(concat("bundle.txt")) 
  .pipe(gulp.dest("./dist"));
});

gulp.task("default", ["concat"]);