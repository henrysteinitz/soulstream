import classnames from 'classnames'
import { Component } from 'react'

export default class E extends Component {
	
	render() {
		const { big } = this.props

		return (
			<div className={classnames('e', { big })}>
				<div className={classnames('e-bar', 'top', { big })} />
				<div className={classnames('e-bar', 'middle', { big })} />
				<div className={classnames('e-bar', 'bottom', { big })} />
			</div>
		)
	}
}