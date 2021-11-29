import { Component } from 'react'
import classnames from 'classnames'
import Share from './share'
import { Link } from '../lib/atlas/atlas'
import Helipad from '../lib/helipad/helipad'


export default class Start extends Component {

	state = {
		uploadTrack: false,
		trackFile: null,
		artUrl: null,
		artFile: null
	}

	handleArtDrop = (file) => {
		const artUrl = URL.createObjectURL(file);
		this.setState({ artFile: file, artUrl, uploadTrack: true });
	}

	closeUpload = () => this.setState({ uploadTrack: false, artFile: false, artUrl: false })

	render() {
		return (
			<div className="start">
				<div className={classnames('start-squares-container', { expanded: this.state.uploadTrack })}>
					<Helipad onDrop={this.handleArtDrop} 
						stopPropagation 
						className={classnames('start-square', 'open', { expanded: this.state.uploadTrack })} 
						onClick={() => this.setState({ uploadTrack: true })}>
						<div>
							{ this.state.artUrl ? <img src={this.state.artUrl} className="start-image" /> : <div className="start-square-shade" /> }
							<div className="start-square-text">
								{ !this.state.artUrl ? (this.state.uploadTrack ? "upload artwork" : "upload track") : null }
							</div>
						</div>
					</Helipad>
					<Share open={this.state.uploadTrack} artFile={this.state.artFile} close={this.closeUpload} artFile={this.state.artFile} />
					<Link to="new">
						<div className={classnames('start-square', { open: !this.state.uploadTrack })} >
							<img src="test_data/profile.jpg" className="start-image" />
							<div className="start-square-shade blue" />
							<div className="start-square-text">
								create profile
							</div>
						</div>
					</Link>
				</div>
			</div>
		)
	}
}