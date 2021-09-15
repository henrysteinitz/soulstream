import { Component } from 'react'

import ArtistLink from './artist_link.js'
import Content from './content.js'
import Crowd from './crowd.js'
import Time from './time.js'
import Account from '../state/account.js'
import { bird } from '../test/test.js'

const forms = {
	'player': 'PLAYER',
	'row': 'ROW',
	'box': 'BOX'
}


export default class Track extends Component {

	state = {
		showCrowd: false,
		likeHover: false,
		crowdHover: false
	}

	render() {
		const { likeHover, crowdHover, showCrowd } = this.state
		const { form, song, isPlaying, playingId, play, pause, currentTime, totalTime, skipTo, account, artist } = this.props
		const isCurrentlyPlaying = isPlaying && playingId === song.id

		return (
			<div className="track-container">
			<div className="track">
				<Content size="medium" art={song.artUrl} /> 
					<div className="track-player">
						<div className="track-reason">
							<ArtistLink artist={bird} /> shared 
						</div>
						<div className="track-title">
							{song.title}
						</div>
						<div className="track-meta-lower">
							<div className="title-artist inline">
								{artist && artist.name}
							</div>
							{
								song.album && 
								<div className="inline">
									<div className="circle" />
									<div className="title-album inline">
										Overgrown
									</div>
								</div>
							}		
						</div>
						{/*<Controls 
							play={play} 
							pause={pause} 
							isPlaying={isPlaying} 
							nowPlaying={nowPlaying} 
							pocketMode={pocketMode} 
							signedIn={signedIn} 
							currentTrackTime={currentTime}
				    		totalTrackTime={totalTime}
				    		skipTo={skipTo}
						/>*/}
						<div className="bar-buttons">
							<div className="controls-left">
							{
								isCurrentlyPlaying ?
								<img 
									className="control track-button play-button" 
									src="icons/icons8-pause_filled.png"
									onClick={pause} />
									:
								<img 
									className="control track-button play-button" 
									src="icons/icons8-play_filled.png"
									onClick={() => play(song)} />	
							}
							</div>
							<div className="controls-right">
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
										onClick={() => this.setState({ showCrowd: !this.state.showCrowd })} />
								</div>
							</div>
						</div>
						<Time currentTime={playingId === song.id ? currentTime : 0} totalTime={totalTime} skipTo={skipTo}  /> 
					</div>
				</div>
				<Crowd
					show={showCrowd} 
					account={account} 
					song={song} />
			</div>
		)
	}	
}