import { Component } from 'React'
import PropTypes from 'prop-types'

export class SongTitle extends Component {

	render() {
		const { title, artist, album } = this.props
		return (
			<div className="title-container">
				<div className="title title-song">{ title }</div>
				<div className="title title-artist">{ artist }</div>
				<div className="title circle" />
				<div className="title title-album">{ album }</div>
			</div>
		)
	}
}

SongTitle.propTypes = {
	title: PropTypes.string.isRequired,
	artist: PropTypes.string.isRequired,
	album: PropTypes.string.isRequired
}