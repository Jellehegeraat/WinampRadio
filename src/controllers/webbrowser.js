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
		var template = "index.tpl";
		var data = {};
		
		if(url == '/ajax?next')
		{
			_station.playNextStation();
			url = '/success.html';
		} 
		if(url == '/ajax?up')
		{
			_winamp.volumeUp();
			url = '/success.html';
		}
		if(url == '/ajax?time-out')
		{
			_timer.pauseMusic();
			url = '/success.html';
		}
		if (url == '/ajax?down')
		{
			_winamp.volumeDown();
			url = '/success.html';
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
		
		_fs.stat(__dirname + '/../html' + url, function(err, stat) {
			if(err) {
				console.log('File bestaat niet: ' + url);
			} else {
				returnFile(response, __dirname + '/../html' + url);
			}
		});
	
	}

	function returnFile(response, url) {
		_fs.readFile(url, function(err, template){
			if(err){
				response.statusCode = 500;
				response.end('Error getting the file (' + url + '): ' + err);
			} else {
				const ext = _path.parse(url).ext;
				response.statusCode = 200;
				response.setHeader('Content-type', mimeType[ext] || 'text/plain' );
				
				response.end(parseStaticPage(template));
			}
		});
	}

	function parseStaticPage(template) {
		page = String(template).replace("<!--stationlistOptions-->", _station.stationListHtmlOptions());
		return page;
	}
	
	function nextChosenStation(stationId) {
		_station.playNextStation(stationId);		
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



