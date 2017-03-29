# gulp 构建前端自动化工作环境

1.命令行窗口的打开：【自动定位到当前目录下面】

 	1）.当前目录下，按“shift”+右键->在此处打开命令行

 	2）.当前目录下，在地址栏里输入“cmd”.

 2.前端编译


【流行框架】：requireJS    SeaJs   react    webpack    AngularJs   

       工具：nodeJs  npm    bower   less  sass   gulp   git



## 一.【nodeJS环境】
 
  nodejs不是js文件，也不是js框架,  而是服务端的一个js运行环境，类似于php服务器。



【nvm】:node版本管理



##【npm】:所依赖的包管理工具  http://npmjs.com/
 
1.安装一个依赖包
 -> npm install package_name   

 -> npm install package_name   --save    
(会在package.json里面加上一个dependencies配置项，当别人拿到这个项目时，可以直接npm install会把自己所依赖的全部下载下来)

2.初始化项目  （会自动生成一个配置文件package.json）
 ->npm init         有提示，可以手动配置
 ->npm init --yes   无提示，全部默认配置

3.删除一个文件
 ->rm 名称

4.卸载一个依赖包
 ->npm uninstall package_name   



##【bower】所依赖的包管理工具    bower.io/search/  里面有好多第三方流行的库

bower的安装方式：
 ->npm install -g bower  

 bower安装所依赖的包   
 ->bower install jquery



##【gulp】当下最流行的自动化工具  
【官网地址：http://www.gulpjs.com.cn/docs/getting-started/】
[官网](http://gulpjs.com/)
[中文网](http://www.gulpjs.com.cn/)

(可以自动完成一系列重复操作 ： less->css   js css img等压缩)

【gulp的安装方法：】 ->npm install -g gulp
【gulp API: www.gulpjs.com.cn/docs/api/】

1. 全局安装 gulp：

   -> npm install -g gulp


2. 作为项目的开发依赖（devDependencies）安装：

  -> npm install --save-dev gulp

3. 在项目根目录下创建一个名为 gulpfile.js 的文件：

var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});


4. 运行 gulp：

  -> gulp

5.初始化一个项目
->npm init --yes



【淘宝镜像：http://npm.taobao.org/】
（如果npm install 下载依赖包太慢的话，可以使用淘宝 NPM 镜像），使用方法：
->npm install -g cnpm --registry=https://registry.npm.taobao.org
->cnpm install [name]



##【如何在gulp中定义任务】：

var gulp = require('gulp');
gulp.task('say',function(){
	

});

gulp的API:

   1. gulp.src(globs[, options])：取一个文件

	

   2. gulp.dest(path[, options])：目的地文件



   3. gulp.task(name[, deps], fn)



   4. gulp.watch



【gulp  插件： http://gulpjs.com/plugins/】

插件安装方法：-> npm install gulp-less --save-dev    //安装并加入到dev中


## 常用插件

- [编译 Less：gulp-less](https://www.npmjs.com/package/gulp-less)

- [创建本地服务器：gulp-connect](https://www.npmjs.com/package/gulp-connect)

- [合并文件：gulp-concat](https://www.npmjs.com/package/gulp-concat)

- [最小化 js 文件：gulp-uglify](https://www.npmjs.com/package/gulp-uglify)

- [重命名文件：gulp-rename](https://www.npmjs.com/package/gulp-rename)

- [最小化 css 文件：gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)

- [压缩html文件 gulp-minify-html](https://www.npmjs.com/package/gulp-minify-html)

- [最小化图像：gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)




# gulp自动化工作流学习
步骤：

1.当前目录打开命令行

2.创建package.json  npm的配置文件
  ->npm init
  或者
  ->npm init -yes


3.添加一个gulp的依赖

 ->npm install gulp --save-dev

4.根目录下，新建一个gulpfile.js 文件（名称是固定的）


5.在gulpfile.js中编辑任务
  var gulp = require('gulp');
  gulp.task('less',function(){

  });



gulp自动化工作流的使用方法：

 1.在命令行里直接npm 任务名称，即可启动相应的任务

 2.在webstorm里面，右键gulpfile.js文件，通过show gulp tasks调出task窗口，双击任务


