import { Component } from 'react'
import ReactDOM from 'react-dom'

import classnames from 'classnames'
import Helipad from '../lib/helipad/helipad.js'
import { Route } from '../lib/atlas/atlas.js' 

import Left from './left.js'
import Mural from './mural.js'
import Right from './right.js'
import Upload from './upload.js'

export default class Stereo extends Component {

	state = {
		isPlaying: false,
		song: null,
		currentTrackTime: 0,
		totalTrackTime: null,
		scrubbingTrack: false,
		scrubbingPlayer: false,
		screenOn: false
		// TODO: move to a global store.
	}

	timeAnimationInterval = null

	componentDidMount() {
		window.addEventListener('keydown', (e) => this.handleSpacebar(e));
	}

	play = (song) => {
		if (this.state.song && song.id === this.state.song.id) {
			this.setState({ 
				isPlaying: true, 
				currentTrackTime: this.audioRef.currentTime, 
				totalTrackTime: this.audioRef.duration 
			}, () => {
				this.audioRef.play()
				this.animateTime()
				setTimeout(() => this.turnScreenOn(), 70)
			})
		} else {
			clearInterval(this.timeAnimationInterval)
			this.setState({ 
				isPlaying: true, 
				currentTrackTime: 0, 
				totalTrackTime: this.audioRef.duration,
				song
			}, () => {
				this.audioRef.play()
				this.animateTime()
				setTimeout(() => this.turnScreenOn(), 70)
			})
		}

	}

	animateTime = () => {
		this.timeAnimationInterval = setInterval(() => {
			this.setState({
				currentTrackTime: this.audioRef.currentTime,
				totalTrackTime: this.audioRef.duration
			})
		}, 40)
	}

	stopTimeAnimation = () => {
		clearInterval(this.timeAnimationInterval)
	}

	pause = () => {
		this.setState({ isPlaying: false }, () => this.audioRef.pause())
	}

	toggle = () => {
		this.state.isPlaying ? this.pause() : this.play(this.state.song) 
	}

	beginScrub = () => {
		this.stopTimeAnimation()
		this.setState({ scrubbing: true })
	}

	endScub = () => {
		this.setState({ scrubbing: false })
	}

	skipTo = (time, cb = () => {}) => {
		this.audioRef.currentTime = time
		this.setState({ currentTrackTime: time }, cb)
	}

	turnScreenOn = () => this.setState({ screenOn: true })

	turnScreenOff = () => this.setState({ screenOn: false })

	toggleScreen = () => this.setState({ screenOn: !this.state.screenOn })

	handleSpacebar = (e) => {
		if (e.key === ' ') {
			e.preventDefault()
			this.toggle()
		}
	}

	render() {
		const { song, isPlaying, currentTrackTime, totalTrackTime, screenOn } = this.state
		const { signedIn, startSession, stream, account, artist } = this.props
		console.log(this.context)

		return (
			<div className="page-outer-container" onKeyDown={this.handleSpacebar}>
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
{/*				<Route path="/[artist]">
					<Mural src="test_data/artistsbigbirb.jpg" />
				</Route>*/}
				<Helipad className={classnames('page-content', { center: !signedIn })} modal={<Upload />}>
					<div className="left fake" />
		    		<Left ref="left" 
		    			toggle={this.toggle} 
		    			play={this.play} 
		    			pause={this.pause} 
		    			nowPlaying={song}
		    			isPlaying={isPlaying}
		    			signedIn={signedIn}
		    			startSession={startSession}
		    			currentTrackTime={currentTrackTime}
		    			totalTrackTime={totalTrackTime}
		    			skipTo={this.skipTo}
		    			toggleScreen={this.toggleScreen}
		    			screenOn={screenOn}
		    			account={account} 
		    			artist={artist}
		    			/>
		    		{ 
		    			signedIn && 
		    			<Right toggle={this.toggle} 
		    				play={this.play} 
		    				pause={this.pause} 
		    				playingId={song && song.id} 
		    				isPlaying={isPlaying}
		    				signedIn={signedIn}
		    				currentTrackTime={currentTrackTime}
		    				totalTrackTime={totalTrackTime}
		    				skipTo={this.skipTo}
		    				stream={stream}
		    				account={account}
		    				artist={artist} />
		    		}
					<audio id="audio" src={song && song.audioUrl} ref={(input) => {this.audioRef = input}} />
				</Helipad>
			</div>
		)
	}
}