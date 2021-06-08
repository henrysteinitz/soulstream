import classnames from 'classnames'
import { Component } from 'React'
// import PropTypes from 'prop-types'

import { Carousel } from './carousel.js'
import { Content } from './content.js'
import { Time } from './time.js'

const carouselMode = "CAROUSEL"

export class Screen extends Component {

	state = {
		contentIsPaused: true,
		mode: carouselMode,
	}
	
	render() {
		const { state, props } = this
		const { size, isCurrent, art } = props;

		return (
			<div className={classnames("screen", size)} >
				{ carouselMode && <Carousel />}
				{ isCurrent && <Time /> }
				<audio id="screen-audio" src="test_data/music/sig.m4a" ref="audio" />
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