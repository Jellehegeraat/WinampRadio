module.exports = function Webbrowser(logfile, station, timer, winamp) {
	var _this = this;
	
	var _fs = require('fs'),
		_path = require('path'),
		_http = require('http');
	
	var _logfile = logfile,
		_station = station,
		_winamp = winamp,
		_timer = timer;
		
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
		if(url == '/time-out')
		{
			dopauseMusic();
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
		if (String(url).substr(0,9) == "/goto?id=")
		{
			var arr = url.split('=');
			nextChosenStation(parseInt(arr[1]));
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
				response.setHeader('Content-type', mimeType[ext] || 'text/plain' );
				
				response.end(parseStaticPage(data));
			}
		});
	}

	function parseStaticPage(data) {
		data = String(data).replace("<!--stationlistOptions-->", _station.stationListHtmlOptions());
		return data;
	}
	
	function nextChosenStation(stationId) {
		_station.playNextStation(stationId);		
	}
	function doNextStation() {
		_station.playNextStation();
	}

	function doVolumeUp() {
		_winamp.volumeUp();
	}

	function dopauseMusic() {
		_timer.pauseMusic();
	}
	
	function doVolumeDown() {
		_winamp.volumeDown();
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



