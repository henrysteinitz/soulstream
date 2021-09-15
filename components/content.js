import classnames from 'classnames'
import { Component } from 'react'
import PropTypes from 'prop-types'

import { FastForward } from './fastforward.js'
import { PlayPause } from './playpause.js'
import { Rewind } from './rewind.js'
import Time from './time.js'
import { SongTitle } from './title.js'



export default class Content extends Component {

	state = {
		contentIsPaused: true
	}

	play = () => {
		this.setState({ contentIsPaused: false }, () => {
			this.refs.audio.play();
		});
	}

	pause = () => {
		this.setState({ contentIsPaused: true }, () => {
			this.refs.audio.pause();
		});
	}

	render() {
		const { size, isCurrent, art, toggle, play, pause } = this.props;

		return (
			<div className={classnames("content", size)} >
				<img src={art} />
				<div className="fullscreen-controls-lower">
					<SongTitle 
						title="Signature" 
						artist="Photography"
						album="Freeform 8" />
				</div>		
			</div>
		)
	}
}

// Content.propTypes = {
//  	size: PropTypes.oneOf(["full", "medium"]),
//  	isCurrent: PropTypes.bool,
//  	art: PropTypes.string
// }

// TODO
// - take and render album art and album videos
//   - consider allowing small album preview to be videos
// - resize / minimize
// - render and connect controls
// - -