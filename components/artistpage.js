import { Component } from 'react'
import { Link } from 'react-router-dom'
import { AtlasConsumer } from '../lib/atlas/atlas.js'
import Track from './track'


class ArtistPageWithAtlas extends Component {

	state = {
		artist: null,
		newArtistName : ""
	}

	componentDidMount() {
		if (this.props.atlas.getLastUrlSegment() !== 'new') {
			fetch('/api/artist/get_artist', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({ 
					artistUrl: this.props.atlas.getLastUrlSegment()
				})
			}).then((res) => {
				res.json().then(body => {
					console.log(body)
					this.setState({ artistUrl: body })
				})
			}).catch((err) => console.log(err))
		}
	}

	handleName = (e) => {
		e.preventDefault()
		e.stopPropagation()
		this.setState({ newArtistName: e.target.value })
	}

	render() {
		const { playingId, isPlaying, play, pause, currentTrackTime, totalTrackTime, skipTo, stream, account, atlas } = this.props
		const { newArtist, newArtistName } = this.state
		const artist = this.state.artist || this.props.artist

		const artistUrl = this.props.atlas.getLastUrlSegment()
		const isNewArtist = artistUrl === 'new'
		return (
			<div className="artist-page">
				<div className="big-artist-name right-title">
					{isNewArtist || (artist && artist.name)}
					{isNewArtist && 
					<input 
						className="artist-name-input right-title" 
						value={newArtistName} 
						onChange={this.handleName} 
						placeholder="Name"
						autoFocus />}
					
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
								key={track.id}
							/>
						))
					}
				</div>
			</div>
		)
	}
}

export default class ArtistPage extends Component {
	render() {
		return (
			<AtlasConsumer>
				{(atlas) => (
					<ArtistPageWithAtlas atlas={atlas} {...this.props} />
				)}
			</AtlasConsumer>
		)
	}
}