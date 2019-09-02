const fs = require('fs')
const Path = require('path')
const send = require('koa-send')

const IsFile=(filePath)=>{
    return new Promise((resolve) => {
        fs.stat(filePath, (err, stats) => {
            if (err) {
                resolve(null)
            }
            else {
                resolve(stats.isFile());
            }
        })
    })
}

async function get_Route_FilePath(ctx, data) {
    let dir, router
    if (typeof (data) === 'object') {
        if (data[0]) {
            for (var item of data) {
                if (ctx.request.url.includes(item.router)) {
                    dir = item.dir
                    router = item.router
                    await toSend(ctx, dir, router)
                }
            }
        }
        else {
            dir = data.dir
            router = data.router
        }

    }
    else {
        dir = router = data
    }
    await toSend(ctx, dir, router)
}

async function toSend(ctx, dir, router) {
    try{
        const index = (router && ctx.request.url.lastIndexOf(router) +( router.length))||0
        const fileUrl = ctx.request.url.substring(index)
        let filePath = Path.join(dir, decodeURIComponent(fileUrl))
        if (filePath.indexOf('?') !== -1) {
            filePath = filePath.split('?')[0];
        }

        if (await IsFile(filePath)) {
            await send(ctx, filePath, { root: '/' });
        }else if(filePath.replace(/\\/g,'/').indexOf('public/static/img')!==-1){
            filePath=filePath.replace(/public([\/\\])static([\/\\])img/,'public$1img');
            if(await IsFile(filePath)){
                await send(ctx, filePath, { root: '/' });
            }
        }
    }catch(e){
       
        return new Promise(r=>{
            ctx.body = 'Not Found';
            r();
        })
    }
}

function static(data) {
    return async function static(ctx, next) {
        if (ctx.method !== 'HEAD' && ctx.method !== 'GET') {
            ctx.body = 'Method Not Allowed'
            await next()
            return;
        }
        if (ctx.body != null || ctx.status !== 404) {
            return;
        }
        await get_Route_FilePath(ctx, data)
        await next()
    }
}

module.exports = static









