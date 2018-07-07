var gulp =require('gulp');
var minify =require('gulp-minify');

gulp.task('default',['watchJS'],function(){
    console.log('hello gulp');
});

gulp.task('watchJS',function(){
   gulp.watch('./dev/*.js',['minify-js']);
});

gulp.task('minify-js',function(){
  gulp.src('./dev/*.js').pipe(minify()).pipe(gulp.dest('./public'));
});

// gulp.task('copyHTML',function(){
//     gulp.src("./dev/*.html").pipe(gulp.dest('./public'));
// });