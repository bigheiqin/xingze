
var express = require('express')
var config = require('./config/index')
var port = process.env.PORT || config.dev.port

var app = express()

var router = express.Router()

// 配置路由
router.get('/', function (req, res, next) {
    req.url = '/index.html'
    next()
})

// 使用路由
app.use(router)
