export  default class Recorder {
	constructor() {
		this.audioType = 'audio/webm;codecs=opus'
		this.mediaRecorder = {}
		this.recordedBlobs = {}

	}

	_setup() {
		const options = { mimeType: this.audioType }
		const isSupported = MediaRecorder.isTypeSupported(options.mimeType)
		if(!isSupported) {
			const msg = `the codec: ${options.mimeType} isn't supported`
			alert(msg)

			throw new Error(msg)
		}

		return options
	}

	startRecording(stream) {
		const options = this._setup()
		this.mediaRecorder = new MediaRecorder(stream, options)

		this.mediaRecorder.onstop = (event) => {
			console.log('recordes Blobs', this.recordedBlobs)
		}

		this.mediaRecorder.ondataavailable = (event) => {
			if(!event.data || !event.data.size) return;

			this recordedBlobs.push(event.data)
		}

		this.mediaRecorder.start()

	}

	async stopRecording() {
		if(this.mediaRecorder.state === "inactive") return;

		this.mediaRecorder.stop()
		console.log('media recorded stopped')
	}

	getRecordingURL() {
		const blob = new Blob(this.recordedBlobs, { type: this.audioType })
		return window.URL.createObjectURL(blob)
	}

	toggleAudioElement() {
		const classList = this.audioElement.classList
		visible ? classList.remove('hidden') : classList.add('hidden')
	}

	playAudio(url) {
		const audio = this.audioElement
		audio.src = url
		audio.muted = false
		this.toggleAudioElement({ visible: true })
		audio.addEventListener("loadedmetadata", _=> audio.play())
	}
}