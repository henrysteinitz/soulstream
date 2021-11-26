import Component from 'react'
import classnames from 'classnames'

class Icon extends Component {

	state = {
		mouseDown: true
	}

	handleMouseDown = () => this.setState({ mouseDown: true })

	render() {
		const { track } = this.props
		return  (
			<div className={classnames({ hidden: !mouseDown })}>
				<Draggable>
					<img src={track.} className="album-icon" {track.albumArt}/>
				</Draggable>
			</div>

		)
	}
}