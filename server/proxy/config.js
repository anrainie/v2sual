module.exports = {
    base:'v1/ds',
    proxy:[{
        "name": "AFA 测试连接",
        "source": "/afa",
        "target": "https://afa-api.awebide.com",
        "changeOrigin": true,
        "pathRewrite": { 'v1/ds/afa': '' },
        "logLevel": "debug"
    }]
}