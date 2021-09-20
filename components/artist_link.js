import { Component } from 'react'
import { Link } from '../lib/atlas/atlas.js'

export default class ArtistLink extends Component {

	render() {
		const { artist } = this.props
		const { name, pictureUrl, id } = artist
		return (
			<div className="artist-link">
				<img src={pictureUrl} className="artist-picture" />
				<Link to={'jamesblake'} className="artist-name">
					{name}
				</Link> 
			</div>
		)
	}
}


