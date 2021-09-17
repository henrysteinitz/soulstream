import { Component } from 'react'
import Atlas, { Link } from '../lib/atlas/atlas.js'
import classnames from 'classnames'

import Controls from './controls.js'
import Logo from './logo.js'
import Search from './search.js'
import SignIn from './signin.js'



export default class Navigation extends Component {

	render() {
		const { 
			pocketMode, 
			toggleScreen, 
			play, 
			pause, 
			isPlaying, 
			nowPlaying, 
			signedIn, 
			startSession, 
			currentTrackTime, 
			totalTrackTime ,
			skipTo
		} = this.props
		return (
			<div className="navigation">
				<Logo big={!pocketMode} toggleScreen={toggleScreen} />
				<Controls 
					play={play} 
					pause={pause} 
					isPlaying={isPlaying} 
					nowPlaying={nowPlaying} 
					pocketMode={pocketMode} 
					signedIn={signedIn} 
					currentTrackTime={currentTrackTime}
		    		totalTrackTime={totalTrackTime}
		    		skipTo={skipTo}
				/>
				{signedIn && <Link className={classnames("selected", { active: Atlas.path === '/' })} to="/">
				<div className="nav-link">Stream</div></Link>}
				{signedIn && <Link activeClassName="selected" to="/library"><div className="nav-link">Library</div></Link>}
				{signedIn && <Link activeClassName="selected" to="/history"><div className="nav-link">History</div></Link>}
				{signedIn && <Link activeClassName="selected" to="/type"><div className="nav-link">Type</div></Link>}
				{signedIn || <SignIn startSession={startSession} />}
				
			</div>
		)
	}
}