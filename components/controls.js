import { Component } from 'react'
import classnames from 'classnames'

import Crowd from './crowd.js'
import Logo from './logo.js'
import Search from './search.js'
import Time from './time.js'
import { showingOptions } from './left.js'

export default class Controls extends Component {

	state = {
		showCrowd: false,
		likeHover: false,
		crowdHover: false,
		lyricsHover: false,
		queueHover: false
	}
	
	render() {
		const { 
			isPlaying, 
			play, 
			pause, 
			nowPlaying, 
			pocketMode, 
			signedIn, 
			currentTrackTime, 
			totalTrackTime,
			skipTo,
			toggleScreen,
			account,
			showQueue,
			showLyrics,
			showChat,
			showing,
			nightMode
		} = this.props
		const { likeHover, crowdHover, lyricsHover, queueHover } = this.state
		return (
			// TODO: remove / replace 'signIn &&' for signin page shuffle
			<div className={classnames('controls', { black: nightMode, white: !nightMode })}>
				<div className="bar-buttons">
					<div className="controls-left">
						{
							signedIn 
							&& (isPlaying ?
								<img 
									className={classnames('control', 'screen-button', 'play-buttton', { white: nightMode, black: !nightMode })}
									src="icons/icons8-pause_filled.png"
									onClick={pause} />
									:
								<img 
									className={classnames('control', 'screen-button', 'play-buttton', { white: nightMode, black: !nightMode })}
									src="icons/icons8-play_filled.png"
									onClick={() => play(nowPlaying)} />)
						}
					</div>
					<Logo big toggleScreen={toggleScreen} white={nightMode} />
					{/* <img 
						className="control screen-button" 
						src="icons/icons8-plus-math-52.png" />	
					<img 
						className="control screen-button" 
						src="icons/icons8-search-50.png" />	
					<Search pocket	Mode={pocketMode} /> */}
					<div className="controls-right">
					{
						signedIn &&
						<div className="little-controls">
							<img 
								className={classnames('little-control', 'like', { night: nightMode })}
								src={likeHover ? 'icons/icons8-like_filled 2.png' : 'icons/icons8-like_filled.png'}
								onMouseOver={() => this.setState({ likeHover: true })}
								onMouseLeave={() => this.setState({ likeHover: false })}
								onClick={() => {}} />
							<img 
								className={classnames('little-control', 'bubble', { night: nightMode })}
								src={crowdHover ? 'icons/icons8-speech_bubble_filled 2.png' : 'icons/icons8-speech_bubble_filled.png'}
								onMouseOver={() => this.setState({ crowdHover: true })}
								onMouseLeave={() => this.setState({ crowdHover: false })}
								onClick={showChat} />
							<img 
								className={classnames('little-control', 'like', { night: nightMode })}
								src={lyricsHover ? 'icons/icons8-generic_text_filled.png' : 'icons/icons8-generic_text_filled.png'}
								onMouseOver={() => this.setState({ lyricsHover: true })}
								onMouseLeave={() => this.setState({ lyricsHover: false })}
								onClick={showLyrics} />
							<img 
								className={classnames('little-control', 'bubble', { night: nightMode })}
								src={queueHover ? 'icons/icons8-product_documents_filled.png' : 'icons/icons8-product_documents_filled.png'}
								onMouseOver={() => this.setState({ queueHover: true })}
								onMouseLeave={() => this.setState({ queueHover: false })}
								onClick={showQueue} />
								

						</div>
					}
					</div>
				</div>
				<Time 
					screen
					pocketMode={pocketMode}
					currentTime={currentTrackTime}
					totalTime={totalTrackTime} 
					skipTo={skipTo} />
			</div>
		)
	}
}