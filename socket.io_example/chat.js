var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);
app.get('/',function(req,res){
//	res.send('<h1>Hello world!</h1>');
	res.sendFile(__dirname+'/index.html');
});
io.on('connection', function(socket){
  socket.broadcast.emit('chat message',"hi");
  
  socket.on('chat message',function(msg){
  	io.emit('chat message',msg);
  }); 
});



http.listen(3000,function(){
	console.log('Listen on *:3000');
});

