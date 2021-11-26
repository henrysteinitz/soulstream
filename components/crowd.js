import { Component } from 'react'
import classnames from 'classnames'


// Ephemeral comments and social interactions
export default class Crowd extends Component {
	
	state = {
		// map comments ids to hidden = {true, false}
		// TODO: nest...?
		comment: '',
		comments: []
	}

	componentDidMount() {
		const { account, song } = this.props
		if (!song) {
			return
		}
		fetch(`/api/crowd/get_comments`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ 
				trackId: song.id
			})
		}).then((res) => {
			res.json().then(body => {
				this.setState({ comments: body })
			})
		})
		this.state.comments.forEach(comment => {
			setTimeout(() => this.setState({[comment.id]: true}), this.computeRemainingTime(comment))
		})
	}

	computeRemainingTime = (comment) => {
		// TODO: figure it out, kiiid
		return comment.remainingTime * (1000 * 60)
	}

	handleComment = (e) => {
		console.log('comment')
		this.setState({ comment: e.target.value })
	}

	handlePostComment = (e) => {
		const { account, song } = this.props
		const { comment } = this.state

		this.setState({ posting: true })
		fetch('/api/crowd/post_comment', 
		{
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				sessionToken: account.sessionToken,
				message: comment,
				trackId: song.id,
				authorId: account.accountId,
				duration: 5,
			})
		}).then((res) => {
			res.json().then(body => {
				const comment = {...body, accountId: body.id }
				this.setState({ 
					comments: [body].concat(this.state.comments),
					comment: '',
					posting: false,
				})
			})
		})
	} 

	handleEnter = (fn) => (e) => {
		if (e.key === 'Enter') {
			fn(e)
		}
	}

	render() {
		const { show } = this.props
		const { comment, comments, posting } = this.state

		return (
			<div className={classnames('crowd', { show })}>
				<div className="crowd-inner">
					<div className="crowd-left">
					</div>
					<div className="crowd-right">
						<div className="crowd-speak">
							<input className="crowd-input" 
								placeholder="Talk" 
								value={comment} 
								onChange={this.handleComment}
								onKeyPress={this.handleEnter(this.handlePostComment)}
								disabled={posting}
								autoFocus />
						</div>
						<div className="crowd-chat">
							{comments.filter(x => !this.state[x.accountId]).map(comment => (
								<div key={comment.id}>
									<div>
									</div>
									<div className="track-comment">
										{comment.message}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>	
		)
	}
}

