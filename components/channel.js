import { Component } from 'react'
import fetchya from '../lib/fetchya.js'

import Time from './time.js'
import Track from './track.js'


class ChannelScreen extends Component {
	render() {
		/* pictures may incliude images and video */
		const { pictures } = this.props
		return (
			/* TODO: Support multiple pictures */
			<div className="channel-screen">
				<img src={pictures[0]} />
			</div>
		)
	}	
}

class ChannelHeader extends Component {
	follow = () => {
		fetchya('/api/artist/follow', 
		{
			artistId: this.props.artist.id,
			accountId: this.props.account.id
		}, 
		(res) => {
			this.props.follow(res)
		})
	}

	unfollow = () => {
		fetchya('/api/artist/unfollow', 
		{
			artistId: this.props.artist.id,
			accountId: this.props.account.id
		}, 
		(res) => {
			this.props.unfollow(res)
		})
	}

	render() {
		const { artist, sessionFollowing } = this.props
		const userFollowinArtist = sessionFollowing.has(artist.id)

		return (
			<div className="channel-upper">
				<ChannelScreen pictures={[artist.pictureUrl]}/>
				<div className="channel-info">
					<div className="channel-name">
						{artist.name}
					</div> 
					<br/>
					<div className="channel-location">
						New York, NY
					</div>
					<br/>
					<div className="channel-people">
						<div className="channel-followers">
							Followers:
						</div>
						<div className="channel-following">
							Following:
						</div>
					</div>
					<div className="channel-buttons">
						<div className="channel-tune-in-button">
							Tune in
						</div>
						{
							userFollowinArtist ?
							<div className="channel-follow-button" onClick={this.unfollow}>
								Unfollow
							</div> :
							<div className="channel-follow-button" onClick={this.follow}>
								Follow
							</div>
						}
					</div>
				</div>
			</div>
		)
	}
}

export default class Channel extends Component {

	ComponentDidMount() {

	}

	render() {
		const { artist, history, play, account, following: sessionFollowing, follow, unfollow } = this.props

		console.log(account)
		return (
			<div className="channel-container">
				<ChannelHeader 
					artist={artist} 
					account={account} 
					sessionFollowing={sessionFollowing} 
					follow={follow} 
					unfollow={unfollow} 
				/>
				<Time channel history={history} play={play} />
			</div>
		)
	}
}