var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
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
    humidity: Number((Math.random()*2+5.5).toFixed(1)),
  }
}
thetime=`date +%s`; curl -H "Content-Type: application/json" -X POST -d "{\"time\":$thetime,\"moisture\":60,\"temp\":76,\"humidity\":7}" http://localhost:3000/update
*/

app.use(bodyParser.json());
app.use(express.static('../frontend/build'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../frontend/build/index.html');
});

app.post('/update', (req, res) => {
  console.log(req.body);
  req.body.time = Math.floor(req.body.time*1000);
  io.sockets.emit('action', {
    type:'SET_SOCKET',
    data: req.body,
  });
  res.status(200).end();
});

http.listen(3000, () => {
  console.log('Listening on port 3000');
});
