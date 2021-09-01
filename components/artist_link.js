import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ArtistLink extends Component {

	render() {
		const { artist } = this.props
		const { name, pictureUrl, id } = artist
		return (
			<div className="artist-link">
				<img src={pictureUrl} className="artist-picture" />
				<Link to={'artist/${id}'} className="artist-name">
					{name}
				</Link>
			</div>
		)
	}
}