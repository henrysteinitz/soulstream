import { Component } from 'react'

import classnames from 'classnames'
import Helipad from '../lib/helipad/helipad.js'
import supabase from '../lib/supabase.js'

export default class Upload extends Component {
	state = {
		title: "",
		url: "",
		artFile: null,
		artUrl: ""
	}

	handleSubmit = () => {
		// const { title, artUrl } = this.state
		// const url = this.state.url || title.replace(" ", "-")

		supabase.storage.createBucket('trackstest1243sdfdas', { public: true }).then(({data, error}) => {
			console.log(data)
			console.log(error)
		})
		

		/*
		try {
		    const body = { title, content };
		    await fetch('/api/post', {
		      method: 'POST',
		      headers: { 'Content-Type': 'application/json' },
		      body: JSON.stringify(body),
		    });
		    await Router.push('/drafts');
		  } catch (error) {
		    console.error(error);
		  }
		  */
		// exit()
	}

	handleArtDrop = (file) => {
		const artUrl = URL.createObjectURL(file);
		this.setState({ artFile: file, artUrl });
	}

	handleTitle = (e) => this.setState({ title: e.target.value })

	render() {
		const { exit, file } = this.props
		const { artUrl, title } = this.state

		const urlPlaceholder = title.replace(" ", "-")
		return (
			<div>
				<Helipad onDrop={this.handleArtDrop} stopPropagation>
					<div className="upload_art-box"> 
						<img src={artUrl} className="upload_art-image wide" /> 
					</div>
						
				</Helipad>
				<input type="text" className={classnames('upload_track-title', 'upload_textbox')} placeholder="Title" onChange={this.handleChange} />
				<input type="url" className={classnames('upload_track-url', 'upload_textbox')} placeholder="Url" />
				<button onClick={this.handleSubmit} className="upload_button">Upload</button>
			</div>
		)
	}
}

