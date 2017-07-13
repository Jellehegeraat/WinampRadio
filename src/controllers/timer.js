module.exports = function Timer(logfile, station, winamp, config) {
	var _this = this;
	
		
	var _logfile = logfile,
		_station = station,
		_winamp = winamp,
		_timeout = config.get('player.newStationTimeoutMinutes'),
		_timeoutRestore = config.get('player.restoreTimeoutMinutes'),
		_timeoutRestoreStepSize = 1000,
		_volRestore = 0;
		_paused = false;
		
		
    this.start = function() {
		_station.playNextStation();
		setInterval(function () {
			_station.playNextStation();
		}, _timeout * 60000);
		
	};
	
	this.pauseMusic = function() {
			if (_paused == true) {
				return;
			}
			_paused = true;
			_volRestore = _winamp.getVolume();
			_winamp.setVolume(0);
			
			setTimeout(restoreMusic(10), _timeoutRestore * 60000 );
	};
	
	this.restoreMusic = function(steps) {
			if (_paused == false) {
				return;
			}
			
			_paused = true;
	
			setInterval (volUpInterval, _timeoutRestoreStepSize
				
			)
			
			function volUpInterval(){
				if (volUp == false) {
					stopinterval
				}
			}
		
			function volUp() {
				volume = _winamp.getVolume();
				if (_volRestore > (_volume - 5)) {
					_winamp.setVolume(_volume + 5);
					return true;
				} else {
					_winamp.setVolume(_volRestore);
					return false;
				}
			}
	};
	return this;
};

