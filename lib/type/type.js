import React, { Component } from "react";    
import Voice from '../voice/voice.js'   


export default class Type extends Component {
	state = {
		script: ""
	}

	constructor() {
		super()
		this.voice1 = new Voice()
	}

	handleTyping = (event) => {
		this.setState({ script: event.target.value })
	}
	  
	play = () => {
		this.voice1.say(this.state.script)
	}

	save = () => {
		return
	}

	render() {
		const { play, script } = this.state
		return (
			<div>
				<textarea onChange={this.handleTyping}>
					{ script }
				</textarea>
				<button onClick={this.play}>
					play
				</button>			
				<button onClick={this.save}>
					save
				</button>
			</div>
		)
	}
}