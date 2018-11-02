var AipOcr = require('./src/index').ocr;
var fs = require('fs');
var http = require('http');

//设置APPID/AK/SK（前往百度云控制台创建应用后获取相关数据）
var APP_ID = "";
var API_KEY = "";
var SECRET_KEY = "";

var client = new AipOcr(APP_ID, API_KEY, SECRET_KEY);

var image = fs.readFileSync('1.png');
var idCardSide = "front";

var app = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
    var base64Img = new Buffer(image).toString('base64');
    client.idcard(base64Img, idCardSide).then(function(result) {
        res.end(JSON.stringify(result));
    });
});

app.listen(8000, function() {
    console.log('listening on 8000');
});