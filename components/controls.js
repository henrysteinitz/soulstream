import { Component } from 'react'

import Search from './search.js'
import Time from './time.js'

export default class Controls extends Component {
	
	render() {
		const { isPlaying, play, pause, nowPlaying, pocketMode, signedIn } = this.props
		return (
			<div>
				{signedIn && (isPlaying ?
						<img 
							className="control screen-button play-button" 
							src="icons/icons8-pause_filled.png"
							onClick={pause} />
							:
						<img 
							className="control screen-button play-button" 
							src="icons/icons8-play_filled.png"
							onClick={() => play(nowPlaying)} />)
					}
				{/* <img 
					className="control screen-button" 
					src="icons/icons8-plus-math-52.png" />	
				<img 
					className="control screen-button" 
					src="icons/icons8-search-50.png" />	
				<Search pocket	Mode={pocketMode} /> */}
				<Time screen />
			</div>
		)
	}
}