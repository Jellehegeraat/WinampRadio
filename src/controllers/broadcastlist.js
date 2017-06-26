
module.exports = function BroadcastListController() {
    var _this = this;

    var _ = require("underscore"),
		_broadcastList = [];
	
    _.str = require("underscore.string");
    _.num = require("underscore.number");
    _.mixin(_.str.exports());
    _.mixin(_.num.exports());
	
		
    /**
     * Gets a single broadcast station by Id.
     * @param request
     * @param response
     */
    this.getById = function(id) {
        //if (!_.isInteger(id)) {
        //    console.log("Id isn't an interger value.")
        //    return;
        //}

		return _broadcastList[id];

    };

    /**
     * Initialized broadcastlist.
     * @param request
     * @param response
     */
    this.init = function() {
		_broadcastList = [	
		{
			stationName: "100%nl",
			url: "http://stream.100p.nl/100pctnl.mp3"
		},
		{
			stationName: "Oldiesradio",
			url: "http://stream.intronic.nl/rgrfm_oldiesradio"
		},
		{
			stationName: "arrow classic",
			url: "http://91.221.151.155:80/;?.mp3"
		},
		{
			stationName: "omroep brabant",
			url: "http://live.icecast.kpnstreaming.nl/omroepbrabantlive-OmroepBrabantHq.m3u"
		},
		{
			stationName: "Keizerstad FM",
			url: "http://server-06.stream-server.nl:8800/listen.pls"
		},
		{
			stationName: "Radio 2",
			url: "http://icecast.omroep.nl/radio2-bb-mp3"
		},
		{
			stationName: "Qmusic",
			url: "http://icecast-qmusic.cdp.triple-it.nl:80/Qmusic_nl_live_96.mp3"
		},
		{
			stationName: "Qmusic",
			url: "http://icecast-qmusic.cdp.triple-it.nl:80/Qmusic_nl_live_96.mp3"
		},
		{
			stationName: "Veronica",
			url: "http://playerservices.streamtheworld.com/pls/veronica.pls"
		},
		{
			stationName: "Veronica",
			url: "http://playerservices.streamtheworld.com/pls/veronica.pls"
		},
		{
			stationName: "3fm",
			url: "http://icecast.omroep.nl:80/3fm-bb-mp3"
		},
		{
			stationName: "3fm",
			url: "http://icecast.omroep.nl:80/3fm-bb-mp3"
		},
		{
			stationName: "538",
			url: "http://vip-icecast.538.lw.triple-it.nl:80/RADIO538_MP3"
		},
		{
			stationName: "538",
			url: "http://vip-icecast.538.lw.triple-it.nl:80/RADIO538_MP3"
		},
		{
			stationName: "Sky 90s",
			url: "http://www.skyradio.nl/player/skyradio-90s.pls"
		},
		{
			stationName: "Studio brussel",
			url: "http://mp3.streampower.be/stubru-high.mp3"
		},
		{
			stationName: "3fm alt",
			url: "http://icecast.omroep.nl/3fm-alternative-mp3"
		},
		{
			stationName: "Skyradio",
			url: "http://provisioning.streamtheworld.com/pls/skyradio.pls"
		},
		{
			stationName: "grandprix",
			url: "http://grandprixradio2.live-streams.nl:80/live.m3u"
		},
		{
			stationName: "fresh fm",
			url: "http://www.fresh.fm/media/audio/FreshFM.asx"
		},
		{
			stationName: "keizerstad 80's",
			url: "http://server-06.stream-server.nl:8800/;stream.mp3"
		},
		{
			stationName: "veronica top 1000",
			url: "http://18943.live.streamtheworld.com:80/SRGSTR10_SC"
		},
		{
			stationName: "funx",
			url: "http://icecast.omroep.nl/funx-bb-mp3"
		},
		{
			stationName: "538 hitzone",
			url: "http://vip-icecast.538.lw.triple-it.nl/WEB11_MP3"
		},
		{
			stationName: "Slam",
			url: "http://stream.slam.nl/slam"
		},
		{
			stationName: "538 party",
			url: "http://vip-icecast.538.lw.triple-it.nl/WEB16_MP3"
		},
		{
			stationName: "RGR Fm",
			url: "http://stream.intronic.nl/rgrfm"
		},
		{
			stationName: "slam non stop",
			url: "http://stream.radiocorp.nl/web10_mp3"
		},
		{
			stationName: "Deepfm",
			url: "http://stream.deep.radio/hd"
		},
		{
			stationName: "538 ibiza",
			url: "http://vip-icecast.538.lw.triple-it.nl/WEB19_MP3"
		},
		{
			stationName: "DDP",
			url: "http://vip-icecast.538.lw.triple-it.nl:80/WEB01_MP3"
		}
		]
    };

    return this;
};