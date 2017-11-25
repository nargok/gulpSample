var gulp = require("gulp");
var del = require("del"); // npmでインストールが必要

gulp.task("delete", () => {
  return del("./dist/*")
});

gulp.task("default", ["delete"]);