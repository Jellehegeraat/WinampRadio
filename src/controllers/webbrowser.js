module.exports = function Webbrowser(logfile, station, winamp) {
	var _this = this;
	
	var _fs = require('fs'),
		_path = require('path'),
		_http = require('http');
	
	var _logfile = logfile,
		_station = station,
		_winamp = winamp;

		
    this.start = function() {
		
		_http.createServer(parseUrl).listen(4422); 		
		
	};
	
	function parseUrl(request, response) {
		var url = request.url;
		
		if(url == '/next-track')
		{
			doNextStation();
			url = '/index.html';
		} 
		if(url == '/vol-up')
		{
			doVolumeUp();
			url = '/index.html';
		}
		if (url == '/vol-down')
		{
			doVolumeDown();
			url = '/index.html';
			
		}
		if (url == '/')
		{
			url = '/index.html';
		}
		
		_fs.stat('html' + url, function(err, stat) {
			if(err) {
				console.log('File bestaat niet: ' + url);
			} else {
				returnFile(response, 'html' + url);
			}
		});
	
	}

	function returnFile(response, url) {
		_fs.readFile(url, function(err, data){
			if(err){
				response.statusCode = 500;
				response.end(`Error getting the file: ${err}.`);
			} else {
				const ext = _path.parse(url).ext;
				response.statusCode = 200;
				//response.write(data);
				response.setHeader('Content-type', mimeType[ext] || 'text/plain' );
				response.end(data);
			}
		});
	}

	function doNextStation() {
		console.log("next");

	}

	function doVolumeUp() {
				console.log("up");
		_winamp.sendCommand("40058");
	}

	function doVolumeDown() {
				console.log("down");

	}

	const mimeType = {
		'.ico': 'image/x-icon',
		'.html': 'text/html',
		'.js': 'text/javascript',
		'.json': 'application/json',
		'.css': 'text/css',
		'.png': 'image/png',
		'.jpg': 'image/jpeg',
		'.wav': 'audio/wav',
		'.mp3': 'audio/mpeg',
		'.svg': 'image/svg+xml',
		'.pdf': 'application/pdf',
		'.doc': 'application/msword',
		'.eot': 'appliaction/vnd.ms-fontobject',
		'.ttf': 'aplication/font-sfnt'
	};
  
	return this;
};



