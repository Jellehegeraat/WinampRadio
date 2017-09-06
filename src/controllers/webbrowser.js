module.exports = function Webbrowser(logfile, station, timer, winamp) {
	var _this = this;
	
	var _fs = require('fs'),
		_path = require('path'),
		_http = require('http'),
		_mustache = require('mustache');
	
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
		var data = null;

		//common functions
		if(url == '/ajax?next')
		{
			var station = _station.playNextStation(request.connection.remoteAddress);
			url = '/success.json';
			data = {succes: true, station: station.stationName};
			returnJson(response, url, data);
			return;
		} 
		if(url == '/ajax?time-out')
		{
			_timer.pauseMusic();
			url = '/success.json'; 
		}
		
		//volume functions
		if(url == '/vol?up')
		{
			_winamp.volumeUp();
			url = '/success.json';
		}
		if (url == '/vol?down')
		{
			_winamp.volumeDown();
			url = '/success.json';
		}
		if (String(url).substr(0,9) == "/vol?set=")
		{
			var volumechange = url.split('=');
			var newvol = parseInt(volumechange[1]);
			_winamp.volumeChange(newvol);
			url = '/success.json';
		}
		
		//default handler
		if (url == '/')
		{
			url = '/index.html';
			data = {stationList: _station.stationList()};
		}
		
		//manual station select
		if (String(url).substr(0,9) == "/goto?id=")
		{
			var arr = url.split('=');
			var station = getStation(decodeURI(arr[1]));
			//var stationId = parseInt(arr[1]);
			playStation(request.connection.remoteAddress,station);
			url = '/index.html';
		}
		
		_fs.stat(__dirname + '/../html' + url, function(err, stat) {
			if(err) {
				console.log('File bestaat niet: ' + url);
			} else {
				returnFile(response, __dirname + '/../html' + url, data);
			}
		});
	
	}

	function returnFile(response, url, data) {
		var _parseData = data;
		_fs.readFile(url, function(err, template){
			if(err){
				response.statusCode = 500;
				response.end('Error getting the file (' + url + '): ' + err);
			} else {
				const ext = _path.parse(url).ext;
				response.statusCode = 200;
				response.setHeader('Content-type', mimeType[ext] || 'text/plain' );
				if (_parseData) {
					var body = _mustache.to_html(String(template), _parseData);
				} else {
					var body = template;
				}
				response.write(body); 
				response.end();
			}
		});
	}
	
	function returnJson(response, url, data) {
		var _parseData = data;
		const ext = _path.parse(url).ext;
		response.statusCode = 200;
		response.setHeader('Content-type', mimeType[ext] || 'text/json' );
		response.write(JSON.stringify(data)); 
		response.end();
	}
	function playStationById(srcIp, stationId) {
		return _station.playNextStation(srcIp, stationId);
	}
	function playStation(srcIp, station) {
		return _station.playStation(srcIp, station);
	}
	
	
	
	function getStation (stationName) {
		//console.log(_station.findStation(stationName));
		return _station.findStation(stationName);
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



