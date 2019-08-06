const fs = require('fs')
const Path = require('path')
const send = require('koa-send')

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
    const index = (router && ctx.request.url.lastIndexOf(router) +( router.length))||0
    const fileUrl = ctx.request.url.substring(index)
    let filePath = Path.join(dir, fileUrl)
    if (filePath.indexOf('?') !== -1) {
        filePath = filePath.split('?')[0];
    }
    const isFile = await new Promise((resolve) => {
        fs.stat(filePath, (err, stats) => {
            if (err) {
                resolve(null)
            }
            else {
                resolve(stats.isFile());
            }
        })
    })
    if (isFile) {
        await send(ctx, filePath, { root: '/' });
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









