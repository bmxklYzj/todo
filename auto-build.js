/**
 * @file 自动部署项目到vps：
 * 1. 在vps上clone整个项目： git clone https://github.com/bmxklYzj/todo.git
 * 2. 打包： cd todo; node auto-build.js
 */

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

// exec(`rm -rf ../../../todo; cp -rf ../todo ../../../;cd ../../../todo; pwd`, function(err, stdout, stderr) {
//     console.log(err, stdout, stderr);
// });

fs.readdirSync(__dirname, 'utf8')
    .filter(item => fs.statSync(path.join(__dirname, item)).isDirectory())
    .forEach(item => {
        let projectSrcPath = path.join(__dirname, item);
        exec(`cd ${projectSrcPath}; pwd; yarn; npm run build`, function(err, stdout, stderr) {
            console.log(err, stdout, stderr);
        });
    });

