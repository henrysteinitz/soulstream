import { Component } from 'react'
import classnames from 'classnames'

export default class Search extends Component {
	state = {
		text: '',
	}

	render() {
		const { pocketMode } = this.props
		return (
			<input className={classnames('search', { 'pocket': pocketMode })} />
		)
	}
}