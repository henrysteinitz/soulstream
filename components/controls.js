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
			showing
		} = this.props
		const { likeHover, crowdHover, lyricsHover, queueHover } = this.state
		return (
			// TODO: remove / replace 'signIn &&' for signin page shuffle
			<div className={classnames('controls', { black: pocketMode, white: !pocketMode })}>
				<div className="bar-buttons">
					<Logo big toggleScreen={toggleScreen} />
					<div className="controls-left">
					{
						signedIn 
						&& (isPlaying ?
							<img 
								className="control screen-button play-button" 
								src="icons/icons8-pause_filled.png"
								onClick={pause} />
								:
							<img 
								className="control screen-button play-button" 
								src="icons/icons8-play_filled.png"
								onClick={() => play(nowPlaying)} />)
					}
					</div>
					{/* <img 
						className="control screen-button" 
						src="icons/icons8-plus-math-52.png" />	
					<img 
						className="control screen-button" 
						src="icons/icons8-search-50.png" />	
					<Search pocket	Mode={pocketMode} /> */}z	
					<div className="controls-right">
					{
						signedIn &&
						<div className="little-controls">
							<img 
								className="little-control like"
								src={likeHover ? 'icons/icons8-like_filled 2.png' : 'icons/icons8-like_filled.png'}
								onMouseOver={() => this.setState({ likeHover: true })}
								onMouseLeave={() => this.setState({ likeHover: false })}
								onClick={() => {}} />
							<img 
								className="little-control bubble"
								src={crowdHover ? 'icons/icons8-speech_bubble_filled 2.png' : 'icons/icons8-speech_bubble_filled.png'}
								onMouseOver={() => this.setState({ crowdHover: true })}
								onMouseLeave={() => this.setState({ crowdHover: false })}
								onClick={showChat} />
							<img 
								className="little-control like"
								src={lyricsHover ? 'icons/icons8-generic_text_filled.png' : 'icons/icons8-generic_text_filled.png'}
								onMouseOver={() => this.setState({ lyricsHover: true })}
								onMouseLeave={() => this.setState({ lyricsHover: false })}
								onClick={showLyrics} />
							<img 
								className="little-control bubble"
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