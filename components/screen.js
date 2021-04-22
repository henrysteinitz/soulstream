// import PropTypes from 'prop-types';
import classnames from 'classnames'
import { Component } from 'React'
import PropTypes from 'prop-types'

import { Content } from './content.js'
import { FastForward } from './fastforward.js'
import { PlayPause } from './playpause'
import { Rewind } from './rewind.js'
import { Time } from './time.js'
import { SongTitle } from './title.js'



export class Screen extends Component {
	
	render() {
		const { size } = this.props;

		return (
			<div className={classnames("screen", size)} >
				<img src="test_data/album_art/mem.png" width="400" />
				<SongTitle 
					title="Only to Live in Your Memories" 
					artist="Night Moves"
					album="Pennied Days" />

				<Content/> 
				<Time />
				<Rewind />
				<PlayPause contentIsPaused />
				<FastForward />
			</div>
		)
	}
}

Screen.propTypes = {
 	size: PropTypes.oneOf(["full"])
};


// TODO
// - take and render album art and album videos
//   - consider allowing small album preview to be videos
// - resize / minimize
// - render and connect controls
// - -