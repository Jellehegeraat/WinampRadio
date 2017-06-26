module.exports = function Timer(logfile, station, config) {
	var _this = this;
	
	var _logfile = logfile,
		_station = station,
		_config = config
		_timeout = config.get('player.newStationTimeout');
		
    this.start = function() {
		
		_station.playNextStation();
		setInterval(function () {
			_station.playNextStation();
		}, _timeout); // 1000*60*60*2
		
	};

   return this;
};

