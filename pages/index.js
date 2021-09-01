import Head from 'next/head'
import { Component } from 'react'
import Carousel from '../components/carousel.js'
import Stereo from '../components/stereo.js'
import styles from '../styles/Home.module.css'
import classnames from 'classnames'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const history = createMemoryHistory()

export default class Home extends Component {


   render() {
      return (
        <div className={classnames(styles.container, 'page-container')}>
    		<Router history={history}>
    			<Stereo />
        	</Router>
        </div>
      )
    }
}
