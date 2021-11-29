import classnames from 'classnames'
import { Component } from 'react'

export default class E extends Component {
	
	render() {
		const { big, color, toggleScreen, xl, blues } = this.props

		return (
			<div className={classnames('e', { big, xl }, color)} onClick={toggleScreen}>
				<div className={classnames('e-bar-container', { black: !blues })} >
					<div className={classnames('e-bar', 'three', { big, xl }, color)} />
				</div>
				<div className={classnames('e-bar-container', { black: !blues })}>
					<div className={classnames('e-bar', 'one', { big, xl }, color)} />
				</div>
				<div className={classnames('e-bar-container', { black: !blues })}>
					<div className={classnames('e-bar', 'two', { big, xl }, color)} />
				</div>
				<div className={classnames('e-bar-container', { black: !blues })}>
					<div className={classnames('e-bar', 'four', { big, xl }, color)} />
				</div>
				<div className={classnames('e-bar-container', { black: !blues })}>
					<div className={classnames('e-bar', 'one', { big, xl }, color)} />
				</div>
				<div className={classnames('e-bar-container', { black: !blues })}>
					<div className={classnames('e-bar', 'five', { big, xl }, color)} />
				</div>
			</div>
		)
	}
}