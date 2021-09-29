import classnames from 'classnames'
import { Component } from 'react'
import { Route, AtlasProvider } from '../lib/atlas/atlas.js'
// import PropTypes from 'prop-types'

import Content from './content.js'
import Time from './time.js'

const MODES = {
	'default': "DEFAULT",
	'pocket': "POCKET"
}

export default class Screen extends Component {

	state = {
		contentIsPaused: true,
		mode: "DEFAULT",
	}
	
	render() {
		const { on, toggle, nowPlaying, artist, atlas } = this.props;

		const isNewArtist = atlas.getLastUrlSegment() === 'new'
		console.log(isNewArtist)

		return (
			<div className={classnames("screen", "fullscreen", {"off": !on})} >
				<Route path="/">
					<Content size="fullscreen" art={nowPlaying && nowPlaying.artUrl} toggle={toggle} />
				</Route> 
				<Route path="/[artist]">
					<Content size="fullscreen" art={isNewArtist ? "test_data/profile.jpg" : (artist && artist.pictureUrl)} />
				</Route>
			</div>
		)
	}
}


// Screen.propTypes = {
//  	size: PropTypes.oneOf(["full"]),
//  	isCurrent: PropTypes.bool,
// };




// TODO
// - take and render album art and album videos
//   - consider allowing small album preview to be videos
// - resize / minimize
// - render and connect controls
// - -