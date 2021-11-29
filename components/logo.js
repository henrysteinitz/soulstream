import classnames from 'classnames'
import { Component } from 'react'
import { Link } from 'react-router'

import E from './e.js'

export default class Logo extends Component {
	render() {
		const { big, xl, toggleScreen, white, full, signin, blues } = this.props

		return (
			<div className={classnames('logo-container', { signin  })}>
				<div className={classnames('logo', { big, xl })} >
					<E big={big} xl={xl} color={white ? 'white' : 'black'} toggleScreen={toggleScreen} blues={blues} /> 
					{
						full && <span className="logo-text">soulstream</span>
					}
				
				</div>
			</div>
		)
	}	
}