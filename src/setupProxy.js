const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://62ea14dd3a5f1572e873a205.mockapi.io/api/todo2',
            changeOrigin: true
        })
    )
}