module.exports = function Winamp(logfile, config) {
	var _this = this;
	
	var _exec = require('child_process').exec;
	
	var _logfile = logfile,
		_child = null,
		_winampLocation = config.get('player.winampLocation');
	
    this.playUrl = function(url) {
		var cmd = _winampLocation + ' ' + url;
		_child = _exec(cmd);
	};
	
	this.sendCommand = function(command) {
		if (!_child) return;
		
		// doe iets (vol up)
		
	}

   return this;
};



