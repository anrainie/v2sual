const path = require('path');
const fs=require("fs");
const {
    execFile
} = require('child_process');

const targetDir=path.resolve(process.cwd(),'./project/ad');
const camelcase = require('camelcase');
const readdir = (file) => {
    return new Promise((resolve, reject) => {
        fs.readdir(file, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

}


const readFile = (file) => {

    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

const exe = (src, target, name) => {
    console.log(src)
    console.log(target)
    console.log(name);
    const child = execFile('vue build ', [`-t lib  -d ${target} ${src}`], {
        shell: true,
        cwd: targetDir
    }, (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
        console.log(stdout);
    });
}
const package = async (tPath) => {
    let dir = await readdir(tPath);

    for (let i = -1; item = dir[++i];) {
        let packageJsonPath = path.join(tPath, `${item}/package.json`);
        let componentPath = path.resolve(tPath, item);
        if (fs.existsSync(packageJsonPath)) {
            let content = await readFile(packageJsonPath);

            content = JSON.parse(content.toString());
            let src = path.resolve(componentPath, content.main);
            let target = path.resolve(componentPath, './dist/');
            let name = content.name.replace('@v2-components/', '');
            name = camelcase(name);

            exe(src, target, name);
            // if (content.paramEditor) {
            //     vueMap[content.paramEditor.name] = path.join(filepath, content.paramEditor.path);
            // }

            //   //自定义组件编辑器
            // if (content.editor) {
            //     vueMap[content.editor.name] = path.join(filepath, content.editor.path);
            // }

        }
    }
}

(async () => {

   await package(path.join(targetDir,'../@v2-components'));
})()