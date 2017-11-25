var gulp = require("gulp");

gulp.task("a", () => {
  console.log("a");
});

// ver 1.0 非同期なので順番は保証されていない
// gulp.task("b", () => {
//   console.log("b");
// });

// 非同期なので順番は保証されていない
// gulp.task("default", ["a", "b"]);

// ver 1.1 優先順位を指定する。aの後にbを順番で実行する
gulp.task("b", ["a"], () => {
  console.log("b");
});

// 非同期なので順番は保証されていない
gulp.task("default", ["b"]);
