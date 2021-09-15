export default class Voice {

	constructor() {
		this.synth = window.speechSynthesis
		this.context = new (window.AudioContext || window.webkitAudioContext)()

		this.bufferSource = this.context.createBufferSource()
		const channelSplitter = this.context.createChannelSplitter(4)
		this.bufferSource.connect(channelSplitter)
		const delay1 = this.context.createDelay(1.0)
		const delay2 = this.context.createDelay(2.0)
		const delay3 = this.context.createDelay(3.0)
		const delay4 = this.context.createDelay(4.0)
		channelSplitter.connect(delay1, 0, 0)
		channelSplitter.connect(delay2, 1, 0)
		channelSplitter.connect(delay3, 2, 0)
		channelSplitter.connect(delay4, 3, 0)
		const channelMerger = this.context.createChannelMerger(4)
		delay1.connect(channelMerger, 0, 0)
		delay2.connect(channelMerger, 0, 1)
		delay3.connect(channelMerger, 0, 2)
		delay4.connect(channelMerger, 0, 3)
		channelMerger.connect(this.context.destination)
	}

	say(script) {
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
   			console.log('getUserMedia supported.');
   			navigator.mediaDevices.getUserMedia ({ audio: true })
      		.then((stream) => {
      			const mediaRecorder = new MediaRecorder(stream);
      			const utterance = new SpeechSynthesisUtterance(script);
      			utterance.onend = () => {
      				mediaRecorder.stop()
      				mediaRecorder.ondataavailable = (e) => {
	      				e.data.arrayBuffer().then((buffer) => {
	      					console.log(buffer)
	      					this.context.decodeAudioData(buffer, (audioBuffer) => {
	      						this.bufferSource.buffer = audioBuffer
	      						this.bufferSource.start()
	      					})
	      				})
      				}
      			}

      			mediaRecorder.start()
      			this.synth.speak(utterance)
      		})

      	}
	}

	loop() {
		if (!window) {
			return
		}
		return
	}

	save() {
		if (!window) {
			return
		}
		return
	}

}
