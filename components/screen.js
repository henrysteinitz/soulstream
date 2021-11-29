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

		return (
			<div className={classnames("screen", "fullscreen", {
					off: !on, 
					video: nowPlaying && (nowPlaying.type === 'VIDEO'),
					audio: nowPlaying && (nowPlaying.type === 'AUDIO'),
				})} >
				<Route path="/">
					{
						nowPlaying && (nowPlaying.type === 'VIDEO') ?
						<video id="video" className="screen-video" src={nowPlaying && nowPlaying.audioUrl} ref={(input) => {this.videoRef = input}} /> :
						<Content size="fullscreen" art={nowPlaying && nowPlaying.artUrl} toggle={toggle} song={nowPlaying} />
					}
				</Route> 
				<Route path="/[artist]">
					<Content size="fullscreen" art={isNewArtist ? "test_data/profile.jpg" : (artist && artist.pictureUrl)} song={nowPlaying} />
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