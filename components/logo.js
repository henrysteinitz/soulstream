import classnames from 'classnames'
import { Component } from 'react'
import { Link } from 'react-router'

import E from './e.js'

export default class Logo extends Component {
	render() {
		const { big, toggleScreen } = this.props

		return (
			<div className={classnames('logo', { big })} onClick={toggleScreen}>
				<div className="align-base">soulstr</div><E big={big} /><div className="align-base">am</div> 
			</div>
		)
	}	
}