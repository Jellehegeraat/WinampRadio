module.exports = function Timer(logfile, station, config) {
	var _this = this;
	
	var _logfile = logfile,
		_station = station,
		_config = config
		_timeout = config.get('player.newStationTimeoutMinutes');
		
    this.start = function() {
		
		_station.playNextStation();
		setInterval(function () {
			_station.playNextStation();
		}, _timeout*60000);
		
	};

   return this;
};

