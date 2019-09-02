const path = require('path');
const fs = require("fs");
const {
    exec
} = require('child_process');
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
    exec(`vue build -t lib  -d ${target} -n ${name} ${src}`, {
        shell: true,
        maxBuffer: 1024*1024, 
        cwd: __dirname
    }, (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
        console.log(stdout);
    });
}
const packageComponent = async (tPath, dir) => {

    for (let i = -1, item; item = dir[++i];) {
        let packageJsonPath = path.join(tPath, `${item}/package.json`);
        // let componentPath = path.resolve(tPath, item);
        if (fs.existsSync(packageJsonPath)) {
            let content = await readFile(packageJsonPath);

            content = JSON.parse(content.toString());
            let name = content.name.replace('@v2-components/', '');

            let src = `${tPath}/${name}/${content.main}`;
            let target = `${tPath}/${name}/dist/`;

            let camelCaseName = camelcase(name);

            exe(src, target, camelCaseName);

            if (content.paramEditor) {
                exe(`${tPath}/${name}/${content.paramEditor.path}`, target, content.paramEditor.name);
            }

            //自定义组件编辑器
            if (content.editor) {
                exe(`${tPath}/${name}/${content.editor.path}`, target, content.editor.name);
            }

        }
    }
}

const packagePipe = async (tPath, dir) => {

    for (let i = -1, item; item = dir[++i];) {
        let packageJsonPath = path.join(tPath, `${item}/package.json`);
        if (fs.existsSync(packageJsonPath)) {
            let content = await readFile(packageJsonPath);

            content = JSON.parse(content.toString());
            if (content.docs) {
                let name = content.docs.name;
                let nameArr = name.split('.');
                name = nameArr[nameArr.length - 1];
                let src = `${tPath}/${name}/${content.main}`;

                let target = `${tPath}/${name}/dist/`;
                exe(src, target, `${name}`);


            }


        }
    }
}

(async () => {
    let tPath = "../@v2-components";
    let dir = await readdir(tPath);
    await packageComponent(tPath, dir);

    // let pipePath="../pipe";
    
    // let dir = await readdir(pipePath);
    // await packagePipe(pipePath, dir);

})()