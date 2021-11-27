import { Component } from 'react'
import Draggable from 'react-draggable'

export default class Queue extends Component {

	addToQueue = (id) => () => {
		if (id) {
			this.props.addToQueue(id)
			this.props.stopTrackDragging()
		}
	}

	render() {
		const { tracks, dragTrackId, playQueueTrackByIndex } = this.props
		console.log(tracks)
		return  (
			<div className="queue">
				{
					dragTrackId && 
					<div
						className="queue-dropzone"
						ref={(input) => {this.queueDropzone = input}}
					>
						<div className="queue-dropzone-text">
						Add track to queue
						</div>
					</div>
				}
				{
					tracks.map((track, i) => (
						<Draggable
							axis="y"

						>
							<div className="queue-track" onClick={playQueueTrackByIndex(i)}>
								<div className="queue-track-art-container">
									<img className="queue-track-art" src={track.artUrl}/>
								</div>
								<div className="inline">
									<div className="queue-track-title">
										{track.title}
									</div>
									<div className="queue-track-artist">
										{track.artists && track.artists.length > 0 && track.artists[0].artist.name}
									</div>
								</div>
							</div>
						</Draggable>
					))
				}
			</div>
		)
	}
}