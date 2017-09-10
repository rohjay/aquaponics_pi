
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('ui'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    setInterval(
        function(){
            io.emit('rando', Math.floor(Math.random()*100));
        },
        500
    );
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
