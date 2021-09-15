import { Component } from 'react'
import { Link } from 'react-router-dom'
import Track from './track'

export default class ArtistPage extends Component {

	render() {
		const { playingId, isPlaying, play, pause, currentTrackTime, totalTrackTime, skipTo, stream, account, artist  } = this.props
		console.log(artist && artist.tracks)
		return (
			<div className="artist-page">
				<div className="big-artist-name right-title">
					{artist && artist.name}
				</div>
				<div className="artist-stream">
					{
						artist && artist.tracks.map(track => (
							<Track 
								song={track.track} 
								playingId={playingId} 
								isPlaying={isPlaying} 
								play={play} 
								pause={pause} 
								currentTime={currentTrackTime} 
								totalTime={totalTrackTime}
								skipTo={skipTo}
								account={account} 
								artist={artist}
							/>
						))
					}
				</div>
			</div>
		)
	}
}