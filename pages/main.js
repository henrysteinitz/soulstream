import React, { Component } from 'react'
import Stereo from '../components/stereo.js'
import styles from '../styles/Home.module.css'
import classnames from 'classnames'
import Atlas, { AtlasProvider } from '../lib/atlas/atlas.js'

const initialState = {
	sessionToken: null,
	accountId: null
}
const fakeSignedIn = {
	sessionToken: 1,
	accountId: 1
}
export default class Main extends Component {

	state = fakeSignedIn

	constructor(props) {
		super(props)
		Atlas.reRender = () => this.forceUpdate()
	}

	startSession = (id, token) => {
		// TODO Set / read session from cookie
		this.setState({ id, sessionToken: token })
	}

	render() {
		const { sessionToken, accountId } =this.state
    	const { stream, artist } = this.props
    	const signedIn = !!sessionToken
		return (
			<div className={classnames('page-container', { center: signedIn })}>
    			<AtlasProvider value={Atlas}>
    				<Stereo 
    					signedIn={!!this.state.seesionToken}
    					accountId={this.state.accountId}
    					sessionToken={this.state.seesionToken}
    					signedIn={signedIn}
    					startSession={this.startSession} 
    					stream={stream}
    					account={{accountId, sessionToken}}
    					artist={artist}
    				/>
        		</AtlasProvider>
        	</div>
        )
	}
}