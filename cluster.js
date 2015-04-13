var cluster=require('cluster');
var http=require('http');

var numberCPUs=require('os').cpus().length;
if(cluster.isMaster){
	for (var i = 0; i < numberCPUs; i++) {
		cluster.fork();	
		console.log("cpu:"+i+"is running");
	}
cluster.on('exit',function(worker,code,signal){
	console.log('Worker '+worker.process.pid+'died');
});
}else{
	http.Server(function(req,res){
		res.writeHead(200);
		res.end('I am a worker running in process'+process.pid);
	}).listen(8000);
}

