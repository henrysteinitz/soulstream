import { Component } from 'react'
import { Route, Atlas } from '../lib/atlas/atlas.js'

import { retrograde, signature } from '../test/test.js'
import ArtistPage from './artistpage.js'
import Mural from './mural.js'
import Start from './start.js'
import Track from './track.js'
import Type from '../lib/type/type'

const Right = (props) => {
	const { playingId, isPlaying, play, pause, currentTrackTime, totalTrackTime, skipTo, stream, account, artist, startTrackDragging, stopTrackDragging} = props

	return (
		<div className="page">
			<Route path="/">
				{/*<Start />*/}
				{stream && stream.map((track) => (
				<Track 
					song={track} 
					playingId={playingId} 
					isPlaying={isPlaying} 
					play={play} 
					pause={pause} 
					currentTime={currentTrackTime} 
					totalTime={totalTrackTime}
					skipTo={skipTo}
					account={account}
					artist={track.artists[0]}
					id={track.id}
					startTrackDragging={startTrackDragging}
					stopTrackDragging={stopTrackDragging} />
				))}
			</Route>
			<Route path="/library">
				library
			</Route>
			<Route path="/type">
				{typeof window !== 'undefined' && <Type />}
			</Route>
			<Route path="/[artist]">
				<ArtistPage 
					artist={artist}
					playingId={playingId} 
					isPlaying={isPlaying} 
					play={play} 
					pause={pause} 
					currentTime={currentTrackTime} 
					totalTime={totalTrackTime}
					skipTo={skipTo}
					account={account} />
			</Route>
		</div>
	)
}

export default Right