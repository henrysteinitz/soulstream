import { Component } from 'react'
import ReactDOM from 'react-dom'

import classnames from 'classnames'
import Helipad from '../lib/helipad/helipad.js'
import { Route } from '../lib/atlas/atlas.js' 

import Left from './left.js'
import Mural from './mural.js'
import Right from './right.js'
import Upload from './upload.js'

import { VerseMap } from '../state/lyrics.js'


const mapTracksById = (tracks) => {
	let result = {}
	tracks.forEach((track) => {
		result[track.id] = {...track}
		console.log("Map tracks by id .verses")
		console.log(result[track.id].verses)
		result[track.id].verses = result[track.id].verses ? new VerseMap(result[track.id].verses) : new VerseMap([]) 
	})
	return result
}

export default class Stereo extends Component {

	state = {
		isPlaying: false,
		song: null,
		currentTrackTime: 0,
		totalTrackTime: null,
		scrubbingTrack: false,
		scrubbingPlayer: false,
		screenOn: false,
		typing: false,
		tracks: this.props.stream,
		tracksById: mapTracksById(this.props.stream),
		queue: [], // list of track ids\
		defaultQueue: [],
		dragTrackId: null
		// TODO: move to a global store.
	}

	timeAnimationInterval = null

	componentDidMount() {
		window.addEventListener('keydown', (e) => this.handleSpacebar(e));
		this.audioRef.onended = this.playNextInQueue
	}

	play = (song, source="STREAM") => {
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
			if (source === 'STREAM') {
				// set default queue.
			}
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

	playNextInQueue = () => {
		const { queue, tracksById } = this.state
		if (queue.length > 0) {
			this.play(tracksById[queue.shift()], 'QUEUE')
			this.setState({ queue })
		}
	}

	playQueueTrackByIndex = (i) => () => {
		let { queue, tracksById } = this.state
		this.play(tracksById[queue[i]], 'QUEUE')
		this.setState({ queue: queue.slice(i + 1) })
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
		if (e.key === ' ' && ! this.state.typing) {
			e.preventDefault()
			this.toggle()
		}
	}

	addVerse = (verse, trackId) => {
		const nextTracksById = {...this.state.tracksById}
		nextTracksById[trackid].verses.insert(verse)
		this.setState({
			tracksById: nextTracksById
		}, () => this.syncTracks())
	}

	syncSteamState = () => {
		const nextStream = this.state.tracks.map(x => (
			this.state.tracksById[x.id]
		))
		this.setState({
			tracks: nextStream
		})
	}

	addToQueue = (id) => {
		this.setState({queue: [...this.state.queue, id]})
	}

	startTrackDragging = (id) => {
		this.setState({ dragTrackId: id })
	}

	stopTrackDragging = (id, e) => {
		this.setState({ dragTrackId: null })
		const queueRect = this.left.queue.queueDropzone.getBoundingClientRect()
		if (queueRect.left <= e.clientX && 
			e.clientX<= queueRect.right && 
			queueRect.top <= e.clientY && 
			e.clientY <= queueRect.bottom) {
				this.addToQueue(id)	
		}
	}

	render() {
		const { song, isPlaying, currentTrackTime, totalTrackTime, screenOn, tracks, dragTrackId } = this.state
		const { signedIn, startSession, stream, account, artist } = this.props

		const realStream = tracks || stream
		console.log(dragTrackId)

		return (
			<Helipad className="page-outer-container" onKeyDown={this.handleSpacebar} modal={<Upload />}>
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
				{/*<div className="mural-container">
					{ screenOn && <div className="mural-fake" /> }	
					<Mural />
				</div>*/}
				<div className={classnames('page-content', { center: !signedIn })}>	
					{ screenOn && <div className="left fake" /> }		
		    		<Left ref="left" 
		    			toggle={this.toggle} 
		    			play={this.play} 
		    			pause={this.pause} 
		    			nowPlaying={song && this.state.tracksById[song.id]}
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
		    			setTyping={(value) => this.setState({ typing: value })}
		    			addVerse={this.addVerse}
		    			dragTrackId={dragTrackId}
		    			addToQueue={this.addToQueue}
		    			queueTracks={this.state.queue.map((id) => this.state.tracksById[id])}
		    			stopTrackDragging={this.stopTrackDragging}
		    			playQueueTrackByIndex={this.playQueueTrackByIndex}
		    			ref={(input) => {this.left = input}}

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
		    				stream={realStream}
		    				account={account}
		    				artist={artist}
		    				startTrackDragging={this.startTrackDragging}
		    				stopTrackDragging={this.stopTrackDragging} />
		    		}
					<audio id="audio" src={song && song.audioUrl} ref={(input) => {this.audioRef = input}} />
				</div>
			</Helipad>
		)
	}
}