import { Component } from 'react'

import Search from './search.js'
import Time from './time.js'

export default class Controls extends Component {

	state = {
		showCrowd: false,
		likeHover: false,
		crowdHover: false
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
			skipTo 
		} = this.props
		const { likeHover, crowdHover } = this.state
		return (
			// TODO: remove / replace 'signIn &&' for signin page shuffle
			<div className="controls">
				<div className="bar-buttons">
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
					<Search pocket	Mode={pocketMode} /> */}
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
								className="little-control crowd"
								src={crowdHover ? 'icons/icons8-speech_bubble_filled 2.png' : 'icons/icons8-speech_bubble_filled.png'}
								onMouseOver={() => this.setState({ crowdHover: true })}
								onMouseLeave={() => this.setState({ crowdHover: false })}
								onClick={() => this.setState({ showCrowd: !this.state.showCrowd })} />

						</div>
					}
					</div>
				</div>
				<Time 
					screen
					currentTime={currentTrackTime}
					totalTime={totalTrackTime} 
					skipTo={skipTo} />

			</div>
		)
	}
}