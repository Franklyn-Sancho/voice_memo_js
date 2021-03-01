export default class View {
	constructor() {
		this.btnStart = document.getElementById('btnStart')
		this.btnStop = document.getElementById('btnStop')
		this.audioElement = document.getElementById('audio')
	}
	onRecordingClick(command) {

		return () => {
			command()
			this.toggleAudioElement({ visible: false })
		}

	}

	onStopRecordingClick(command) {

		return () => {
			command()
		}

	}

	configureStartRecordingButton(command) {
		this.btnStart.addEventListener('click', this.onRecordingClick(command))
	}

	configureStopRecordingButton(command) {
		this.btnStop.addEventListener('click', this.onRecordingClick(command))
	}	

}
