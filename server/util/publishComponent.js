const fs = require('fs');
const path = require('path');
const {
  spawn,
  spawnSync,
  execFile
} = require('child_process');

let cmpsPath = path.resolve(__dirname, '../../project/@v2-components');

let publishList = [];

fs.readdirSync(cmpsPath).forEach(function (file) {
  if (file.indexOf('aweb') === 0) {
    console.log(file);
  } else {
    publishList.push(file);
    console.log(file);
  }
});

// fs.writeFileSync(path.resolve(__dirname, './cmpList.json'), JSON.stringify(publishList), 'utf8', function (err) {
//   if (err) {
//     console.error(err);
//   }
//   console.log('成功');
// });
var doSomething = function (distPath,moduleName) {
  // execFile('npm version ', ['patch'], {
  //       shell: true,
  //     cwd: distPath
  // }, (error, stdout, stderr) => {
  //     if (error) {
  //         throw error;
  //     }
  //     console.log(stdout);
  // });
  console.log(distPath);
  // spawnSync(`npm unpublish ${moduleName} --force`, {
  //   shell: true,
  //   cwd: distPath
  // });

  execFile('npm ', ['publish'], {
    shell: true,
    cwd: distPath
  }, (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
  });
};

for (let i = 0; i < publishList.length; i++) {
  let distPath = path.resolve(cmpsPath, `./${publishList[i]}`);
  // let moduleName = `@aweb-components/${publishList[i]}`;

  doSomething(distPath);
}
