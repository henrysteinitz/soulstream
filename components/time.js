import { Component } from 'React'

export class Time extends Component {

	render() {
		return (
			<div className="time-container">
				<div className="time">
					<div className="time-scrubber" />
				</div>
			</div>
		)
	}
}