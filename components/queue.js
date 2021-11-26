import { Component } from 'react'

export default class Queue extends Component {

	addToQueue = (id) => () => {
		console.log("hello")
		if (id) {
			this.props.addToQueue(id)
			this.props.stopTrackDragging()
		}
	}

	render() {
		const { tracks, dragTrackId } = this.props
		console.log(tracks)
		return  (
			<div className="queue">
				{
					dragTrackId && 
					<div
						className="queue-dropzone"
						onMouseUp={this.addToQueue(dragTrackId)}
					>
						Add track to queue
					</div>
				}
				{
					tracks.map(track => (
						<div className="queue-track">{track.title}</div>
					))
				}
			</div>
		)
	}
}