import classnames from 'classnames'
import { Component } from 'react'
import PropTypes from 'prop-types'

import Content from './content.js'

export default class Carousel extends Component {

	render() {
		return (
			<div className="carousel">
				<Content size="medium" art="test_data/album_art/mem.png" />
				<Content size="full" art="test_data/album_art/sign2.png" isCurrent />
      			<Content size="medium" art="test_data/album_art/nova.jpg" />
        		<Content size="medium" art="test_data/album_art/mem.png" />
        	    <Content size="medium" art="test_data/album_art/sign2.png" />
        		<Content size="medium" art="test_data/album_art/nova.jpg" />
        		<Content size="medium" art="test_data/album_art/mem.png"/>
        		<Content size="medium" art="test_data/album_art/nova.jpg" />
			</div>
		)
	}                
}

