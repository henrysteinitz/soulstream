import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'

import Controls from './controls.js'
import Logo from './logo.js'
import Search from './search.js'
import SignIn from './signin.js'

export default class Navigation extends Component {

	render() {
		const { pocketMode, toggleScreen, play, pause, isPlaying, nowPlaying, signedIn, setSession } = this.props
		return (
			<div className="navigation">
				<Logo big={!pocketMode} toggleScreen={toggleScreen} />
				<Controls play={play} pause={pause} isPlaying={isPlaying} nowPlaying={nowPlaying} pocketMode={pocketMode} signedIn={signedIn} />
				{signedIn && <NavLink exact activeClassName="selected" to="/"><div className="nav-link">Stream</div></NavLink>}
				{signedIn && <NavLink activeClassName="selected" to="/library"><div className="nav-link">Library</div></NavLink>}
				{signedIn && <NavLink activeClassName="selected" to="/history"><div className="nav-link">History</div></NavLink>}
				{signedIn || <SignIn setSession={setSession} />}
			</div>
		)
	}
}