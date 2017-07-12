
var Station = require("./controllers/station"),
    Winamp = require("./controllers/winamp"),
	Timer = require("./controllers/timer"),
	Webbrowser = require("./controllers/webbrowser"),
	Logfile = require("./controllers/logfile"),
	Config = require("config-js");

var _logfile = new Logfile(),
	_config = new Config("./config.js"),
	_winamp = new Winamp(_logfile, _config),
	_station = new Station(_logfile, _winamp, _config),
	_timer = new Timer(_logfile, _station, _winamp, _config),
	_webbrowser = new Webbrowser(_logfile, _station, _timer, _winamp, _config);


_timer.start();

_webbrowser.start();


