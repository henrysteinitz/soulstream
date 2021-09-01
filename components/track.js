import { Component } from 'react'

import ArtistLink from './artist_link.js'
import Content from './content.js'
import Time from './time.js'
import Account from '../state/account.js'
import { bird } from '../test/test.js'

const forms = {
	'player': 'PLAYER',
	'row': 'ROW',
	'box': 'BOX'
}


export default class Track extends Component {
	render() {
		const { form, song, isPlaying, playingId, play, pause } = this.props
		const isCurrentlyPlaying = isPlaying && playingId === song.id

		return (
			<div className="track">
				<Content size="medium" art={song.album.artUrl} /> 
				{ /* <Time /> */ }
				<div className="track-player">
					<div className="track-reason">
						<ArtistLink artist={bird} /> shared 
					</div>
					<div className="track-title">
						{song.title}
					</div>
					<div className="track-meta-lower">
						<div className="title-artist inline">
							{song.artist.name}
						</div>
						<div className="circle" />
						<div className="title-album inline">
							{song.album.title}
						</div>
					</div>
					{isCurrentlyPlaying ?
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
					<Time /> 	
				</div>
			</div>
		)
	}	
}