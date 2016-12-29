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

		this.loadPlayer();

		this.player.play();
	},

	loadPlayer: function() {

		this.player = new Audio5js({
			ready: this.loadAudioFile.bind(this)
		});
	},

	loadAudioFile: function() {

		this.player.load(this.audioFile);
	},

	playPause: function() {

		return this.player.playing
					? this.player.pause()
					: this.player.play();
	}
}

