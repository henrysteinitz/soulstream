import { Component } from 'react'

import classnames from 'classnames'
import Prisma from '@prisma/client'
import { createHash } from 'crypto'

export default class SignIn extends Component {
	
	state = {
		email: '',
		password: '',
		passwordRetype: '',
		signUp: false
	}

	handleEmail = (e) => this.setState({ email: e.target.value })

	handlePassword = (e) => this.setState({ password: e.target.value })

	handlePasswordRetype = (e) => this.setState({ passwordRetype: e.target.value })

	handleSignIn = () => {
		const { email, password } = this.state
	}

	handleSignUp = () => {
		const { setSession } = this.props
		const { email, password, passwordRetype } = this.state
		if (password !== passwordRetype) {
			// TODO: Validate so we never enter this condition
			return;
		}
		console.log(email)
		// Hash password
		const hash = createHash('sha256');
		hash.update(password);
		const passwordHash = hash.digest('hex')

		fetch('/api/auth/signup', 
		{
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: {
				email, 
				passwordHash
			}
		}).then((res) => {
			console.log(res)
		})

	}

	render() {
		const { signUp } = this.state
		return (
			<div className="sign-in">
				<input className={classnames('signin-input', 'signin-email')} placeholder="Email" onChange={this.handleEmail} />
				<input className={classnames('signin-input', 'signin-email')} placeholder="Password" type="password" onChange={this.handlePassword}/>
				{ signUp && <input className={classnames('signin-input', 'signin-email')} placeholder="Retype password" type="password" onChange={this.handlePasswordRetype} /> }
				{ 
					signUp ||
					<button className="signin-button" onClick={this.handleSignIn}>
						Sign In
					</button>
				}
				{ 
					signUp &&
					<button className="signin-button" onClick={this.handleSignUp}>
						Sign Up
					</button>
				}
				{
					signUp ||
					<div className="signin-signup-toggle" onClick={() => this.setState({ signUp: true })}>
						Don't have an account?
					</div>
				}
				{
					signUp &&
					<div className="signin-signup-toggle" onClick={() => this.setState({ signUp: false })}>
						Already have an account?
					</div>
				}
			</div>
		)
	}
}