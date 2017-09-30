var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

var data = {
    time: "updating",
    moisture: "updating",
    temp: "updaating",
    ph: "updating"
};

app.use(bodyParser.json());

app.get('/', function(req, res){
    // res.sendFile(__dirname + '/index.html');
    res.sendFile(__dirname + '/../frontend/build/index.html');
});

// example curl:
// curl -H "Content-Type: application/json" -X POST -d '{"username":"xyz","password":"xyz"}' http://localhost:3000/update
app.post('/update', function(req, res) {
    io.sockets.emit('update', req.body);
    res.status(200).end();
});

io.on('connection', function(socket){
    socket.on('update', function(back_at_me){});
});

http.listen(3000, function(){});

