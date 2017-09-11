
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');

app.use(express.static('../frontend/build'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/../frontend/build/index.html');
});

io.on('connection', function(socket){
    setInterval(
        function(){
          socket.emit('action', {
            type:'SET_SOCKET',
            data: {
              time: moment().valueOf(),
              moisture: Math.floor(Math.random()*100),
              temp: Math.floor(Math.random()*4+76),
              ph: Number((Math.random()*2+5.5).toFixed(1)),
            }
          });
        },
        1000
    );
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
