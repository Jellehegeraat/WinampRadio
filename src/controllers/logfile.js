var fs = require('fs'),
    _moment = require("moment");

module.exports = function LogFile() {
	var _this = this;

	this.addToLogFile = function(station, calc){
		fs.appendFile(__dirname + '/../log.txt', _moment().format("YYYY-MM-DD HH:mm:ss") + "\t" + calc.start + "\t" + calc.last + "\t" + calc.random + "\t" + station.stationName + "\t" + station.url + "\r\n" ,function (err) {
			if (err) throw err;
		});
  	}

	this.addTextToLogFile = function(text){
		fs.appendFile(__dirname + '/../log.txt', _moment().format("YYYY-MM-DD HH:mm:ss") + "\t" + text + "\r\n" ,function (err) {
			if (err) throw err;
		});
  	}

	return this;
}
