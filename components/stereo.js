import { Component } from 'react'
import ReactDOM from 'react-dom'

import classnames from 'classnames'
import Helipad from '../lib/helipad/helipad.js'

import Left from './left.js'
import Right from './right.js'
import Upload from './upload.js'

export default class Stereo extends Component {

	state = {
		isPlaying: false,
		song: null,
		// TODO: move to a global store.
		sessionToken: null,
		accountId: null
	}

	play = (song) => {
		if (song.id === this.state.playingId) {
			this.setState({ isPlaying: true }, () => this.audioRef.play())
		} else {
			this.setState({ 
				isPlaying: true, 
				song }, () => this.audioRef.play())
		}
	}

	pause = () => {
		this.setState({ isPlaying: false }, () => this.audioRef.pause())
	}

	toggle = () => {
		this.state.playing ? this.pause() : this.play() 
	}

	setSession(id, token) {
		this.setState({ accountId: id, sessionToken: token });
	}

	render() {
		const { song, isPlaying, sessionToken } = this.state
		const signedIn = !!sessionToken
		return (
			<div>
				{/*
					signedIn ||
					<video autoPlay muted loop className="background-video">
						<source type="video/mp4" src="test_data/video/corn.mov" />
					</video>
				*/}
				{/*
					signedIn ||
					<div className="background-video-shade" />
				*/}
				<Helipad className={classnames('page-content', { center: !signedIn })} modal={<Upload />}>
					<div className="left fake" />
		    		<Left ref="left" 
		    			toggle={this.toggle} 
		    			play={this.play} 
		    			pause={this.pause} 
		    			nowPlaying={song}
		    			isPlaying={isPlaying}
		    			signedIn={signedIn}
		    			setSession={this.setSession} />
		    		{ 
		    			signedIn && 
		    			<Right ref="right" 
		    				toggle={this.toggle} 
		    				play={this.play} 
		    				pause={this.pause} 
		    				playingId={song && song.id} 
		    				isPlaying={isPlaying}
		    				signedIn={signedIn} />
		    		}
					<audio id="audio" src={song && song.audioSrc} ref={(input) => {this.audioRef = input}} />
				</Helipad>
			</div>
		)
	}
}