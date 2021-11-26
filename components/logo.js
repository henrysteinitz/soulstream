import classnames from 'classnames'
import { Component } from 'react'
import { Link } from 'react-router'

import E from './e.js'

export default class Logo extends Component {
	render() {
		const { big, toggleScreen, white } = this.props

		return (
			<div className={classnames('logo-container')}>
				<div className={classnames('logo', { big })} >
					<E big={big} color={white ? 'white' : 'black'} toggleScreen={toggleScreen}  />
				</div>
			</div>
		)
	}	
}