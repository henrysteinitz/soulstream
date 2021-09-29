import { Component } from 'react'

import { AtlasConsumer } from '../lib/atlas/atlas.js'
import Logo from './logo.js'
import Navigation from './navigation.js'
import Screen from './screen.js'
import SignIn from './signin.js'

export default class Left extends Component {

	render() {
		const { 
			nowPlaying, 
			play, 
			pause, 
			isPlaying, 
			signedIn, 
			startSession, 
			currentTrackTime, 
			totalTrackTime, 
			skipTo, 
			screenOn,
			toggleScreen, 
			artist } = this.props
		return  (
		<AtlasConsumer>
			{ 
				(atlas) => (
				<div className="left real">
					<Screen on={screenOn || atlas.isArtist()} 
						play={play} 
						pause={pause} 
						nowPlaying={nowPlaying} 
						artist={artist}
						atlas={atlas} />
					<Navigation pocketMode={screenOn} 
						toggleScreen={toggleScreen} 
						play={play} 
						pause={pause} 
						isPlaying={isPlaying} 
						nowPlaying={nowPlaying}
						signedIn={signedIn}
						startSession={startSession}
						currentTrackTime={currentTrackTime}
						totalTrackTime={totalTrackTime} 
						skipTo={skipTo} />
				</div>)
			}
		</AtlasConsumer>
		)
	}
}
