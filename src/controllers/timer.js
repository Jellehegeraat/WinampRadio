module.exports = function Timer(logfile, station, winamp, config) {
	var _this = this;
	
	var _logfile = logfile,
		_station = station,
		_winamp = winamp,
		_timeout = config.get('player.newStationTimeoutMinutes'),
		_timeoutRestore = config.get('player.restoreTimeoutMinutes'),
		_timeoutRestoreStepSize = 2000,
		_volRestore = 0,
		_volRestoreStep = 1,
		_resetloop = null,
		_volume = 0,
		_width = 0,
		_pausedOn = new Date() - 120000,
		_paused = false;
		
		
    this.start = function() {
		_station.playNextStation('firstTimer');
		_this.readVolume();
		setInterval(function () {
			_station.playNextStation('intervalTimer');
		}, _timeout * 60000);
		
	};
	
	this.readVolume = function()
	{
		_volume = _winamp.getVolume()
	};
	
	this.pauseMusic = function() {
			_pausedOn = new Date();
			if (_paused == true) {
				clearInterval(_resetloop);
			}
			_paused = true;
			_volRestore = _winamp.getVolume();
			_winamp.setVolume(0);
			setTimeout(function(){_this.restoreMusic();}, _timeoutRestore * 60000 );
	};

	this.getPercentage = function(){
		if (_paused == false) return 0;
		var now = new Date();
		var $result = parseInt(100 - ((now - _pausedOn) / (_timeoutRestore * 600)));
		if ($result > 100) $result = 100;
		if ($result < 0) $result = 0;
		return $result;
	}
	
	this.volUpInterval = function() {
		if (_winamp.getVolume() >= _volRestore)
		{
			clearInterval(_resetloop);
			_paused = false;
		}
		else
		{
			_this.volUp();
		}
	};
	
	this.volUp = function() {
		_this.readVolume();
		var newvol = _volume + _volRestoreStep;
		if(newvol > _volRestore) newvol = _volRestore;
		_winamp.setVolume(newvol);
	}
	
	this.restoreMusic = function() {
			if (_paused == false) {
				return;
			}
			_resetloop = setInterval (_this.volUpInterval, _timeoutRestoreStepSize);
	};
	return this;
};

