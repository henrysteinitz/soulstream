import { Component } from 'react'
import classnames from 'classnames'
import Draggable from 'react-draggable'

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
		crowdHover: false,
		showTrackIcon: false,
		iconStyle: { left: 0, top: 0 }
	}

	holdTimeout = null
	mouseMoveListener = null

	beginMouseHold = (e) => {
		e.preventDefault()
		this.holdTimeout = setTimeout(() => {
			this.props.startTrackDragging(this.props.song.id)
			this.setState({ showTrackIcon: true }, () => {
				this.mouseMoveListener = window.addEventListener('mousemove', (e) => {
					this.setState({iconStyle: { left: e.clientX - 35, top: e.clientY - 35}})
				})
			})
		}, 400)
	}

	endMouseHold = (e) => {
		clearTimeout(this.holdTimeout)
		window.removeEventListener('mousemove', this.mouseMoveListener)
		this.setState({ showTrackIcon: false })
	}

	endMouseDrag = (e) => {
		this.props.stopTrackDragging(this.props.song.id, e)
		window.removeEventListener('mousemove', this.mouseMoveListener)
		this.setState({ showTrackIcon: false })
	}

	render() {
		const { likeHover, crowdHover, showCrowd, showTrackIcon, iconStyle } = this.state
		const { 
			form, 
			song, 
			isPlaying,
			playingId, 
			play, 
			pause, 
			currentTime, 
			totalTime, 
			skipTo, 
			account, 
			artist, 
			noArt, 
			noReason, 
			startTrackDragging } = this.props
		const isCurrentlyPlaying = song && isPlaying && (playingId === song.id)

		return (
			<div className="track-container">

				{
					showTrackIcon && 
					<img className="track-icon" src={song.artUrl} ref={(input) => {this.trackIcon = input}} style={iconStyle} onMouseUp={this.endMouseDrag} />
				}
				<div 
					className={classnames('track', { wide: !noArt })} 
					onMouseDown={this.beginMouseHold}
					onMouseUp={this.endMouseHold} 
				>
					{noArt || <Content size="medium" art={song.artUrl} />}
					<div className="track-player">
						{   noReason && <div className="track-reason" / >}
						{	noReason ||
							<div className="track-reason">
								<ArtistLink artist={bird} /> shared 
						</div>}
						<div className="track-title">
							{song && song.title}
						</div>
						<div className="track-meta-lower">
							<div className="title-artist inline">
								{artist && artist.artist.name}
							</div>
							{
								song && song.albums && song.albums[0] &&
								<div className="inline">
									<div className="circle" />
									<div className="title-album inline">
										{song.albums[0].album.title}
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
						<Time currentTime={(song && (playingId === song.id)) ? currentTime : 0} totalTime={totalTime} skipTo={skipTo}  /> 
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