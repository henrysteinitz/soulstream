import { Component } from 'react'
import Draggable from 'react-draggable'
import classnames from 'classnames'

// map line intervals
export default class Lyrics extends Component {
	render() {
		const { lyrics, time, showLyricsEditor } = this.props		

		return (
			<div className="lyrics-container">
				{ lyrics && lyrics.map((verse, s) => (
					<div className="verse">
						{
							verse && verse.map((line, l) => (
								<div className={classnames({ bold: verse.contains(time)}, "verse-line")}>
									{line}
								</div>
							))
						}
					</div>
				))}
				<button className="add-lyrics-button" onClick={showLyricsEditor}>
					Add lyrics
				</button>
			</div>
		)
	}
}

export class LyricsEditor extends Component {
	state= {
		body: "yo",
		startTime: 0,
		endTime: 0
	}

	setStartTime = (e) => {
		const bounds = this.lyricsContainer.getBoundingClientRect()
		const scrubberWidth = bounds.right - bounds.left
		const newCurrentTime = ((e.clientX - bounds.left) / scrubberWidth) * this.props.totalTrackTime
		console.log(newCurrentTime)
		this.setState({ startTime: newCurrentTime })
	}

	setEndTime = (e) => {
		const bounds = this.lyricsContainer.getBoundingClientRect()
		const scrubberWidth = bounds.right - bounds.left
		const newCurrentTime = ((e.clientX - bounds.left) / scrubberWidth) * this.props.totalTrackTime
		console.log(newCurrentTime)
		this.setState({ endTime: newCurrentTime })
	}

	save = () => {
		const { nowPlaying, showLyrics } = this.props
		const { body, startTime, endTime } = this.state
		fetch('/api/verse/post_verse', 
		{
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				trackId: nowPlaying.id,
				body,
				startTime,
				endTime
			})
		}).then((res) => {
			res.json().then(body => {
				showLyrics()
			})
		})
	} 

	render() {
		const { body } = this.state
		const { setTyping } = this.props 
		return (
			<div className="lyrics-editor-container" ref={(input) => {this.lyricsContainer = input}} >
				<Draggable 
					axis="x"
					onStop={this.setStartTime}
				>
					<div className="time-pointer" />
				</Draggable>
				<Draggable 
					axis="x"
					onStop={this.setEndTime}
				>
					<div className="time-pointer"/>
				</Draggable>
				<br/>
				<textarea 
					className="verse-editor" 
					onChange={(e) => this.setState({ body: e.target.value })}
					onFocus={() => setTyping(true)}
					onBlur={() => setTyping(false)}>
					{body}
				</textarea>
				<br/>
				<button onClick={this.save}>
					save
				</button>
			</div>
		)
	}
}