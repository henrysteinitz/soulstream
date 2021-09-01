import { Component } from 'react'

import Logo from './logo.js'
import Navigation from './navigation.js'
import Screen from './screen.js'
import SignIn from './signin.js'

export default class Left extends Component {
	
	state = {
		screenOn: false
	}

	turnScreenOn = () => this.setState({ screenOn: true })
	turnScreenOff = () => this.setState({ screenOn: false })
	toggleScreen = () => this.setState({ screenOn: !this.state.screenOn })

	render() {
		const { screenOn, toggle } = this.state
		const { nowPlaying, play, pause, isPlaying, signedIn, setSession } = this.props
		return  (
			<div className="left real">
				<Screen on={screenOn} ref="screen" toggle={toggle} play={play} pause={pause} nowPlaying={nowPlaying} />
				<Navigation pocketMode={screenOn} 
					toggleScreen={this.toggleScreen} 
					play={play} 
					pause={pause} 
					isPlaying={isPlaying} 
					nowPlaying={nowPlaying}
					signedIn={signedIn}
					setSession={setSession} />
			</div>
		)
	}
}
