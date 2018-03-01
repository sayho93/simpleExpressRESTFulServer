var express = require('express');
var app = express();
var session = require('express-session');
var fs = require("fs"); //파일 열기 위함

app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

app.use(express.static('public'));

app.use(session({
    secret: "pickle!@#$",   //쿠키를 임의로 변조하는것을 방지하기 위한 sign 값
    resave: false,      //세션을 언제나 저장할 지 (변경되지 않아도) 정하는 값
    saveUninitialized: true     //새로 생겼지만 변경되지 않은 세션 저장 여부
}));

var router = require("./router/main")(app);