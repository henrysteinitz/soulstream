import classnames from 'classnames'
import { Component } from 'react'
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
		const { state, props } = this;
		const { on, toggle, nowPlaying } = props;

		return (
			<div className={classnames("screen", "fullscreen", {"off": !on})} >
				<Content size="fullscreen" art={nowPlaying && nowPlaying.album.artUrl} toggle={toggle} /> 
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