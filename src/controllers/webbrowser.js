module.exports = function Webbrowser(logfile, station, winamp) {
	var _this = this;
	
	var _fs = require('fs'),
		_http = require('http');
	
	var _logfile = logfile,
		_station = station,
		_winamp = winamp;

		
    this.start = function() {
		
		_http.createServer(
			function(request, response) {
				response.write('Hello, World!\n');response.end();

			}
		).listen(1337); 		
		
	};
	
	function parseUrl() {
		
	}

	function showIndex() {
		
	}

	function doNextStation() {
		
	}

	function doVolumeUp() {
		
		_winamp.sendCommand("up");
		
	}

	function doVolumeDown() {
		
	}

	
	return this;
};



