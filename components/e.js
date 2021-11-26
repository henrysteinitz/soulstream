import classnames from 'classnames'
import { Component } from 'react'

export default class E extends Component {
	
	render() {
		const { big, color, toggleScreen } = this.props

		return (
			<div className={classnames('e', { big }, color)} onClick={toggleScreen}>
			<div className={classnames('e-bar', 'three', { big }, color)} />
				<div className={classnames('e-bar', 'one', { big }, color)} />
				<div className={classnames('e-bar', 'two', { big }, color)} />
				<div className={classnames('e-bar', 'four', { big }, color)} />
				<div className={classnames('e-bar', 'one', { big }, color)} />
				<div className={classnames('e-bar', 'five', { big }, color)} />
			</div>
		)
	}
}