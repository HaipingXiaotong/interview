const express = require('express')
const app = express()
app.get('/test', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    console.log(req.query)
    res.send(req.query)
})
app.listen(3000, () => {
    console.log('127.0.0.1')
})