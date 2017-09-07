var express = require('express');
var app = express();
// let http = require('http').Server(app);
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser);
app.use(express.static('public'));
// let io = require('socket.io')(http);
let port = 3000;
// let port = process.env.PORT || 3000;
let id=0;
let _socket;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.post('/upload',urlencodedParser,function (req, res) {
    // var name=req.get("name");
    // name=req.param("name");
    // name=req.query.name;
    var name=req.body.name;
    console.log("uploading......");
    console.log(name);
    res.sendFile(__dirname + '/upload_result.html');
});
// app.get('/api/chatRoom/new', function(req, res,next){
//
//     id++;
//     // if(_socket){
//     //     console.log('socket is not null');
//     //     _socket.on(id+'', function(msg){
//     //         console.log('room:'+id+',msg:'+msg);
//     //         io.emit(id+'', msg);
//     //     });
//     // }else{
//     //   console.log('socket is null')
//     // }
//     var nsp = io.of('/'+id);
//     nsp.on('connection', function(socket){
//         console.log('someone connected');
//     });
//     nsp.emit('hi', 'everyone!');
//     res.send(id+'');
// });
// io.on('connection', function(socket){
//   console.log('socket connected')
//   // _socket=socket;
//   socket.on('1', function(msg){
//     console.log(msg);
//     io.emit('1', msg);
//   });
// });

app.listen(port, function(){
  console.log('listening on *:' + port);
});
