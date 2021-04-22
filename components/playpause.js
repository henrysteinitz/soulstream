import { Component } from 'React'
import PropTypes from 'prop-types'

export class PlayPause extends Component {

	render() {
		const { contentIsPaused } = this.props
		return (
			<span>
				{ contentIsPaused ?
					<img className="play-button screen-button" src="icons/icons8-play_filled.png" /> :
					<img src="icons/icons8-pause_filled" />
				}
			</span>
		)
	}
}

PlayPause.propTypes = {
	contentIsPaused: PropTypes.bool.isRequired 
}