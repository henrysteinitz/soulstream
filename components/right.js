import { Component } from 'react'
import { Route } from 'react-router'

import { retrograde, signature } from '../test/test.js'
import Track from './track.js'

export default class Right extends Component {
	render() {
		const { playingId, isPlaying, play, pause } = this.props
		return (
			<div className="page">
				<Route exact path="/">
					<Track song={retrograde} playingId={playingId} isPlaying={isPlaying} play={play} pause={pause} />
					<Track song={signature} playingId={playingId} isPlaying={isPlaying} play={play} pause={pause} />
					<Track song={retrograde} playingId={playingId} isPlaying={isPlaying} play={play} pause={pause} />
					<Track song={retrograde} playingId={playingId} isPlaying={isPlaying} play={play} pause={pause} />
					<Track song={signature} playingId={playingId} isPlaying={isPlaying} play={play} pause={pause} />
				</Route>
				<Route exact path="/library">
					library
				</Route>
			</div>
		)
	}
}