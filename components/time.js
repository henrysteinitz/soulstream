import { Component } from 'react'
import classnames from 'classnames'

export default class Time extends Component {

	render() {
		const { screen } = this.props

		return (
			<div className={classnames("time-container", { 'screen-time': screen })}>
				<div className={classnames("time", { 'screen-time': screen })}>
					<div className="time-scrubber" />
				</div>
			</div>
		)
	}
}