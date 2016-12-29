function audioTour(audioFile) {

	if (audioFile) {
	
		this.audioFile = audioFile;
	}

	this.init();
}

audioTour.prototype = {

	audioFile: 'test.mp3',

	init: function() {

		this.buttons = {
			playPause: document.getElementById('audio-player-control-play-pause')
		};

		this._loadPlayer();

		this.player.play();
	},

	_bindEvents: function(audioPlayer) {

		var _this = this;
	},

	_loadPlayer: function() {

		var _this = this;
		
		this.player = new Audio5js({
			ready: function () {

				this.load(_this.audioFile);
				_this._bindEvents();
			}
		});
	},

	playPause: function() {

		if (this.player.playing) {

			this.player.pause();
		} else {

			this.player.play();
		}
	}
}

