var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'WinampRadio',
  description: 'WinampRadio http://localhost:4422',
  script: __dirname + '/app.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.

svc.on('install',function(){
	svc.start();
});

//svc.uninstall()

svc.install();
