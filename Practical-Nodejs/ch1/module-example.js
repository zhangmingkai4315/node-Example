// config.js

module.exports=function(app){
	app.set('port',process.env.PORT||3000);
	app.set('view',__dirname+'/views');
	app.set('view engine','jade');
	return app;
}


// main.js

var app=express();
var config=require('config.js');
app=config(app);

