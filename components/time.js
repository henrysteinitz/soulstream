import { Component } from 'react'
import Draggable from 'react-draggable'
import classnames from 'classnames'

export default class Time extends Component {
	state = {
		scrubbingWidth: null,
		fakeTime: null
	}

	handleStart = (e) => {
		console.log(e.clientX)
		console.log(this.timeRef.getBoundingClientRect().left)

		this.setState({
			scrubbingWidth: e.clientX - this.timeRef.getBoundingClientRect().left
		})
	}

	handleStop = (e) => {
		const bounds = this.timeRef.getBoundingClientRect()
		const scrubberWidth = bounds.right - bounds.left
		const newCurrentTime = ((e.clientX - bounds.left) / scrubberWidth) * this.props.totalTime
		this.setState({ scrubbingWidth: null, fakeTime: newCurrentTime }, () => {
			this.props.skipTo(newCurrentTime, () => {
				this.setState({ fakeTime: null })
			})
		})
		
	}

	render() {
		const { screen, currentTime, totalTime, channel, history, play } = this.props
		const { scrubbingWidth, fakeTime } = this.state
		const renderTime = fakeTime || currentTime
		const secretWidth = 10000
		const widthValue = scrubbingWidth ? `${scrubbingWidth}px` : `${((renderTime / totalTime) * 100)}%`
		const width = `calc(${secretWidth}px + ${(widthValue)})`
		const style = widthValue ? { width } : {}

		let minTime = history && Math.min(...history.map(x => x.createdAt.getTime()))
		let maxTime = history && Math.max(...history.map(x => x.createdAt.getTime()))
		console.log(minTime)


		return (
			<div className={classnames('time-container', {track: !channel})}>
				<div onMouseDown={this.handleStart} ref={(input) => {this.timeRef = input}} className={classnames("time", { channel, 'screen-time': screen })}>
					<Draggable
						axis="x"
						onStop={this.handleStop}
						position={scrubbingWidth ? null : {x: 0, y: 0}}
					>
						<div className="time-scrubber-container">
							<div className="time-scrubber" style={style} />
						</div>
					</Draggable>
					
				</div>
				{
					channel && history && history.map(x => {
						const percentage = ((maxTime - x.createdAt.getTime()) / (maxTime - minTime)) * 100 
						return ( 
							<div className="history-point" style={{ left: `${percentage}%`}} onClick={() => play(x.track, 'HISTORY')}>
								<img src={x.track.artUrl} />
								<div className="history-point-meta">
									<div className="history-point-title">
										{x.track.title}
									</div>
									{
										x.track.artists && x.track.artists.length > 0 && 
										<div className="history-point-artist">
											{x.track.artists.map(artist => artist.artist.name).join(', ')}
										</div>
									}
								</div>
							</div>
						)
					})
				}
				
			</div>
		)
	}
}