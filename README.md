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


