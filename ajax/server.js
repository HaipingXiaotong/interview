const express = require('express')
const app = express()
// 中间件序列化post数据
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.post('/test', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "text/plain");
    console.log(req.body)
    res.send(req.body)
})
app.listen(3000, () => {
    console.log('127.0.0.1')
})