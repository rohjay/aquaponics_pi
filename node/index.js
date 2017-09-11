var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
<<<<<<< HEAD
var bodyParser = require('body-parser');
var moment = require('moment');

/*
 * Object emitted by socket needs to look like:
{
  type:'SET_SOCKET',
  data: {
    time: moment().valueOf(),
    moisture: Math.floor(Math.random()*100),
    temp: Math.floor(Math.random()*4+76),
    ph: Number((Math.random()*2+5.5).toFixed(1)),
  }
}
curl -H "Content-Type: application/json" -X POST -d '{"type":"SET_SOCKET","data":{"time":101010101,"moisture":60,"temp":76,"ph":7}}' http://localhost:3000/update
*/
=======
var moment = require('moment');
>>>>>>> cd91ac4... Now with type checking

app.use(bodyParser.json());
app.use(express.static('../frontend/build'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../frontend/build/index.html');
});

<<<<<<< HEAD
app.post('/update', (req, res) => {
  io.sockets.emit('action', req.body);
  res.status(200).end();
=======
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
>>>>>>> cd91ac4... Now with type checking
});

http.listen(3000, () => {
  console.log('Listening on port 3000');
});
