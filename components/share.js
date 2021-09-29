import { Component } from 'react'
import classnames from 'classnames'
import Helipad from '../lib/helipad/helipad.js'

export default class Share extends Component {
	state = {
		title: "",
		url: "",
		description: "",
		trackFile: null,
		trackUrl: null
	}

	handleTrackDrop = (file) => {
		const trackUrl = URL.createObjectURL(file);
		this.setState({ trackFile: file, trackUrl });
	}

	save = () => {
		supabase.storage.from('images').upload(
			'tests/image1.png',
			this.props.artfile,
			
		)
	}


	render() {
		const { open } = this.props
		return (
			<div className={classnames('share-form', { open })}>
				<div className={classnames('share-outer-form', 'inline', { open })}>
					<div className="share-upper-form">
						<Helipad onDrop={this.handleTrackDrop} stopPropagation>
							<div className="share-track-file">
								<input type="file" className="share-file-input" />
								<img src="icons/icons8-upload-96.png" className="share-file-icon" />
							</div>
						</Helipad>
						<div className="share-inputs">
							<input className="share-input" value={this.state.title} placeholder="title" />
							<input className="share-input" value={this.state.url} placeholder="url" />
						</div>
					</div>
					<textarea className="share-input share-text-area" placeholder="description">
						{this.state.description}
					</textarea>
				</div>
				<div>
					<button className="signin-button share-save" onClick={this.save}>
						Save
					</button>
					<button className="signin-button" onClick={this.props.close}>
						Cancel
					</button>
				</div>
			</div>
		) 
	}
}