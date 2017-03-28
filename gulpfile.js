//载入gulp包
var gulp = require('gulp');
var config = require('./config.json');
var replace = require('gulp-replace');
var minifyInline = require('gulp-minify-inline');
var tinyCompress = require('gulp-tinypng-compress');
var   tinypng     = require('gulp-tinypng');
var sass         = require('gulp-sass');

var SRC = 'src/' + config.projectName;   //项目名称
var DIST = 'build/' + config.projectName;  //打包的项目名称
var revPrefix = config.revPrefix;   //打包时替换的绝对路径
var path = {
    src: SRC,
    dist: DIST,
    distImgFolder: DIST + '/images',
    srcJs: SRC + '/js/**/*.js',
    srcSass: SRC + '/sass/**/*.scss',
    srcCssFolder: SRC + '/css',
    srcImg: SRC + '/images/**/*.{png,jpg,jpeg}',
    srcImgGif: SRC + '/images/**/*.gif',
    srcFont: SRC + '/fonts/**/*',
    distFontFolder: DIST + '/fonts',
    srcHtml: SRC +'/*.html',
    distHtml: DIST +'/*.html'
};
/**
 * less 编译
 * */
var less = require('gulp-less');   //编译less
var cssnano = require('gulp-cssnano');   //压缩css
gulp.task('less',function(){
    console.log(SRC)
    gulp.src([SRC+'/less/*.less','!'+SRC+'/less/_*.less'])   //排除带有_的样式
        .pipe(less())     //编译成css文件
        .pipe(gulp.dest(SRC+'/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

//编译sass
gulp.task('compile-sass', function(){
    return gulp.src(path.srcSass)
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest(path.srcCssFolder));
});

/**
 * css  合并  压缩
 */
var cssconcat = require('gulp-concat-css');   //合并css
gulp.task('cssconcat',function(){
    gulp.src(SRC+'/css/*.css')
        .pipe(cssconcat('index-min.css'))   //合并css
        .pipe(cssnano())   //压缩css文件
        .pipe(gulp.dest(DIST+'/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

/**
 * js合并 压缩混淆
 */

var concat = require('gulp-concat');   //合并js
var uglify = require('gulp-uglify');    //压缩js
gulp.task('jsconcat',function(){
    gulp.src(SRC+'/js/*.js')
        .pipe(concat('index-min.js'))   //合并
        .pipe(uglify())        //压缩
        .pipe(gulp.dest(DIST+'/js'));
});

/**
 * img的复制
 */

gulp.task('image',function() {
    gulp.src(SRC+'/images/*.*')
        .pipe(gulp.dest(DIST+'/images'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
//img压缩
gulp.task('tinypng-egret', function(){
    return gulp.src(SRC + "/images/**/*.{png,jpg,jpeg}")
        .pipe(tinypng({
            key:config.tinypngapi,
            log:true
        }))
        .pipe(gulp.dest(DIST + "/images"))
});

/**
 * html压缩
 */

var htmlmin = require('gulp-htmlmin');
gulp.task('htmlmin',function() {
    gulp.src(SRC+'/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))

        .pipe(gulp.dest(DIST))
        .pipe(browserSync.reload({
            stream: true
        }));  //通知浏览器刷新

});



/**
 * 自动化同步，监视文件变化,自动刷新页面
 */

var browserSync = require('browser-sync');
gulp.task('serve',function () {
    browserSync({
        server: {
            baseDir: [SRC]
        },
    }, function(err, bs) {
        console.log(bs.options.getIn(["urls", "local"]));
    });

    gulp.watch('src/web/less/*.less',['less']);
    gulp.watch('src/web/js/*.js',['jsconcat']);
    gulp.watch('src/web/images/*.*',['image']);
    gulp.watch('src/web/*.html',['htmlmin']);
});

//watch
gulp.task('watch',function () {
    gulp.watch(SRC+'/less/*.less',['less'])
});

//打包build
gulp.task('build',['cssconcat', 'jsconcat','image','htmlmin']);


//默认任务
gulp.task('default',['watch']);

