module.exports = function StationController(logfile, winamp) {
	var _this = this;
	
	var	BroadcastList = require("./broadcastlist"),
		_ = require("underscore"),
        _moment = require("moment");
		
	var	_start = 0,
		_last = 0,
		_random = 0,
		_nowPlayingUrl = 0,
		_logfile = logfile, 
		_winamp = winamp;
		
	var _broadcastlist = new BroadcastList();
	_broadcastlist.init();
	
	
	/**
     * Play next random station in agenda.
     */
    this.playNextStation = function(src, stationId) {
		if (!stationId) stationId = _getNextStationId();
		var station = _broadcastlist.getById(stationId);
		var calc = _this.getLastCalculation();
		_logfile.addToLogFile(src, station, calc);
	
		_winamp.playUrl(station.url);
		_nowPlayingUrl = station.url;
		return station;
	};
	
	/**
     * Play a station 
     */
    this.playStation = function(src, station) {
		//_logfile.addToLogFile(src, station, calc);
	
		_winamp.playUrl(station.url);
		_nowPlayingUrl = station.url;
		
		return station;
	};
	
	/**
     * Play selected station
     */
    this.findStation = function(stationName) {
		var station = _broadcastlist.getByName(stationName);
		return station;
	};
	/**
     * Gets last calculation information.
     */
    this.getLastCalculation = function() {
		return {
			start: _start,
			last: _last,
			random: _random
		};
	};

	/**
     * Gets all stations and current playing
     */
    this.stationList = function() {
		return _broadcastlist.stationList(_nowPlayingUrl);
	};
	
	/**
     * Gets current playing
     */
    this.stationPlaying = function() {
		return _nowPlayingUrl;
	};
	
	
	// =====================================================================
	// p r i v a t e
	// =====================================================================
	
	function _getNextStationId () {
		_start = 1;
		_last = 29;
		//als het woensdag is, last = 30
		if (_moment().format("e") == "3") {							
			_last = 30;
		}
		
		//als het voor 10 uur is start = 6, last = 13
		if (parseInt(_moment().format("H")) < 10) {
			_start = 6;
			_last = 13;
		}
	
		//randomizer
		_random = Math.floor(_.random(_start,_last));
		//als het vrijdag is en random is 21 -> 24
		if (_moment().format("e") == "5") {	
			if (_random > 21){
				_random = 24
			}
		}
		
		// Grandprix days random <6 -> 18
		var gpdays = ["2017-07-28", "2017-08-25", "2017-09-01", "2017-09-15", "2017-09-29", "2017-10-06", "2017-10-20", "2017-10-27", "2017-11-10", "2017-11-24"];
		if (_.contains(gpdays,  _moment().format("YYYY-MM-DD"))) {
				if (_random < 6) {
					_random = 18
				}
		}

		return _random;
	}

   return this;
};



