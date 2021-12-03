import React, { Component } from 'react'
import Stereo from '../components/stereo.js'
import styles from '../styles/Home.module.css'
import classnames from 'classnames'
import Atlas, { AtlasProvider } from '../lib/atlas/atlas.js'

const initialState = {
	sessionToken: null,
	accountId: null,
	account: {
		sessionToken: null,
		accountId: null
	},
}
const fakeSignedIn = {
	sessionToken: 1,
	accountId: 1
}
export default class Main extends Component {

	state = initialState

	constructor(props) {
		super(props)
		Atlas.reRender = () => this.forceUpdate()
	}

	startSession = (account) => {
		// TODO Set / read session from cookie
		this.setState({ accountId: account.id, sessionToken: account.sessionToken, account })
	}

	render() {
		const { account, sessionToken } =this.state
    	const signedIn = !!sessionToken
    	console.log(signedIn)
		return (
			<div className={classnames('page-container', { center: signedIn })}>
    			<AtlasProvider value={Atlas}>
    				<Stereo 
    					{...this.props}
    					signedIn={!!this.state.sessionToken}
    					sessionToken={this.state.sessionToken}
    					signedIn={signedIn}
    					startSession={this.startSession} 
    					account={account}
    					
    				/>
        		</AtlasProvider>
        	</div>
        )
	}
}