var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var mimifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var uglify = require("gulp-uglify");
var jshint = require("gulp-jshint");
var minhtml = require("gulp-htmlmin");

gulp.task('css',function(){
    //要执行的任务代码
    gulp.src('css/*.css')
		.pipe(autoprefixer())
		.pipe(mimifyCss())
		.pipe(gulp.dest('dist/css'))
})
gulp.task('img',function(){
	gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
})
gulp.task('js', function () {
    gulp.src('js/*.js') // 要压缩的js文件
    // .pipe(jshint())                  //检查js文件的拼写错误
    // .pipe(jshint.reporter('default'))
    .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
    .pipe(gulp.dest('dist/js')); //压缩后的路径
});

gulp.task('html', function () {
    gulp.src('*.html') // 要压缩的html文件
    // .pipe(minifyHtml()) //压缩
    .pipe(minhtml({collapseWhitespace:true}))
    .pipe(gulp.dest('dist/html'));
});

gulp.task('default',['css','img','js']);