var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'WinampRadio',
  description: 'WinampRadio http://localhost:4422',
  script: __dirname + '/app.js'
});

svc.uninstall()
