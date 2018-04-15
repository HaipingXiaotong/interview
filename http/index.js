const http = require('http')
const crypto = require('crypto')
const express = require('express')
const app = express()
const url = require('url')
// 创建一个http服务
/* 100 接收请求
200 请求正常 并返回200 ok
204 服务器成功接收请求 不返回任何信息
206 服务器处理了部分get请求
301 永久性重定向
302 临时重定向
304 资源已找到 返回304 Not Modifid */
let time = 0
app.get('/no-cache', function (req, res) {
    var change = req.query.id
    if (change === '1') {
        time++
    }
    res.set({'Content-Type': 'text/plain', 'Cache-Control': 'max-stale=30'})
    res.send('cache:' + time);
});

var server = app.listen(3000, function () {
    console.log('Example app listening at http://127.0.0.1:3000',);
});
/* http.createServer((req, res, next) => {
    设置响应头和
    Content-Type http首部字段
    let urls = url.parse(req.url, true)
    console.log(urls.query)
    if (urls.query.id && urls.query.id === '1') {
        time++
    }
    console.log(urls)
    if (urls.pathname === '/no-Cache') {
        res.setHeader('Cache-Control', 'no-cache')
        var val = "Cache-Control:" + time
        var etag = crypto
            .createHash('md5')
            .update(val)
            .digest('hex')
        // 强ETag值 弱ETag值 加w/
        res.setHeader('ETag', etag)
        if (req.headers['if-none-match'] == etag) {
            res.writeHead(304)
            res.end(val)
            return
        }
        res.writeHead(200)
        res.end(val)
    }
}).listen(3000, '127.0.0.1', () => {
    console.log('Server listen 127.0.0.1:3000')
}) */