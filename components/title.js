import { Component } from 'react'
import PropTypes from 'prop-types'

export class SongTitle extends Component {

	render() {
		const { title, artist, album } = this.props
		return (
			<div className="title-container">
				<div className="title title-song">{ title }</div>
				{
					artist && 
					<div className="title title-artist">{ artist }</div>
				}
				{
					artist && album && 
					<div className="title circle" />
				}
				{
					album && 
					<div className="title title-album">{ album }</div>
				}
			</div>
		)
	}
}

// SongTitle.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	artist: PropTypes.string.isRequired,
// 	album: PropTypes.string.isRequired
// }