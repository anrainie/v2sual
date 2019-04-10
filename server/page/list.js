const reader = require('filelist_reader');
const path = require('path');
const fs = require('fs');
const listPath = path.resolve(__dirname, '../../runtime/src/views');

console.log(listPath);

function listDir (dirPath = listPath) {
  let treeNode = [];
  try {
    let files = fs.readdirSync(dirPath);
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      let filePath = dirPath + path.sep + files[i];
      let stat = fs.lstatSync(dirPath + path.sep + files[i]);
      if (stat.isDirectory()) {
        let DirInfo = listDir(filePath);
        treeNode.push({
          nodeName: path.dirname(filePath),
          nodePath: filePath,
          isDirectory: true,
          children: DirInfo
        });
      } else {
        let nodeInfo = listFile(filePath);
        treeNode.push({
          nodeName: nodeInfo,
          isDirectory: false,
          nodePath: filePath
        });
      }
    }
  } catch (e) {
    console.error(e);
  }
  return treeNode;
}

function listFile (pagePath) {
  if (pagePath.endsWith('.vue')) {
    return path.basename(pagePath);
  }
}

const dirList = listDir();

console.log(JSON.stringify(dirList));

module.exports = listDir;
