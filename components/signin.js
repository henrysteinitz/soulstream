import { Component } from 'react'

import classnames from 'classnames'
import Prisma from '@prisma/client'
import { createHash, randomBytes } from 'crypto'
import Logo from './logo.js'

export default class SignIn extends Component {
	
	state = {
		email: '',
		password: '',
		passwordRetype: '',
		prototypeKey: '',
		signUp: false,
		prototypeLocked: true,
		basicInfo: false,
		session: null
	}

	prototypePasswordHash = 'd238673759b06921ffd2b9e8dc7ace8b247442143efd57b4b51b75ca64464cdd'

	handleEmail = (e) => this.setState({ email: e.target.value })

	handlePassword = (e) => this.setState({ password: e.target.value })

	handlePasswordRetype = (e) => this.setState({ passwordRetype: e.target.value })

	handleProtoKey = (e) => this.setState({ prototypeKey: e.target.value })

	hash = (str) => {
		const hash = createHash('sha256');
		hash.update(str);
		return hash.digest('hex')
	}

	handleSignIn = () => {
		if (this.signUp) {
			return
		}

		const { startSession } = this.props
		const { email, password } = this.state

		// salt n pepper hash
		const pepper = this.hash(password)
		const salt = randomBytes(32).toString('hex');
		const finalHash = this.hash(salt + pepper)

		fetch('/api/auth/signin', 
		{
			method: 'PATCH',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				email, 
				finalHash,
				salt
			})
		}).then((res) => {
			res.json().then(body => startSession(body.id, body.sessionToken))
		})

	}

	handleSignUp = () => {
		const { startSession } = this.props
		const { email, password, passwordRetype } = this.state
		if (password !== passwordRetype) {
			// TODO: Validate so we never enter this condition
			return;
		}
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
			body: JSON.stringify({
				email, 
				passwordHash
			})
		}).then((res) => {
			res.json().then(body => startSession(body.id, body.sessionToken))
		})
	}


	unlockPrototype = () => {
		if (this.hash(this.state.prototypeKey) === this.prototypePasswordHash) {
			this.setState({ prototypeLocked: false })
		}
	}

	handleEnter = (fn) => (e) => {
		if (e.key === 'Enter') {
			fn()
		}
	}

	render() {
		const { signUp, prototypeLocked, basicInfo } = this.state
		console.log('protoKey')
		const key = randomBytes(32).toString('hex');
		console.log(key)
		console.log(this.hash(key))

		return (
			<div className="sign-in">
				<Logo white={false} toggleScreen={() => {}} xl full signin blueBars />
				{
					basicInfo && 
					<input className={classnames('signin-input', 'signin-email')} 
						placeholder="Name" 
						onChange={this.handleEmail} />
				}
				{
					prototypeLocked || 
					<input className={classnames('signin-input', 'signin-email')} 
						placeholder="Email" 
						onChange={this.handleEmail} />
				}
				{
					prototypeLocked || 
					<input className={classnames('signin-input', 'signin-email')} 
						placeholder="Password" 
						type="password" 
						onChange={this.handlePassword} 
						onKeyPress={this.handleEnter(this.handleSignIn)} />
				}
				{ 
					signUp && 
					(prototypeLocked || 
					<input className={classnames('signin-input', 'signin-email')} 
						placeholder="Retype password" 
						type="password" 
						onChange={this.handlePasswordRetype}
						onKeyPress={this.handleEnter(this.handleSignUp)} />)
				}
				{
					prototypeLocked &&
					<input className={classnames('signin-input', 'signin-email', 'protokey-input')} 
						placeholder="Prototype key" 
						onChange={this.handleProtoKey}
						onKeyPress={this.handleEnter(this.unlockPrototype)} />
				}
				{ 
					signUp ||
					prototypeLocked ||
					<button className="signin-button" onClick={this.handleSignIn}>
						Sign In
					</button>
				}
				{ 
					signUp &&
					(prototypeLocked ||
					<button className="signin-button" onClick={this.handleSignUp}>
						Sign Up
					</button>)
				}
				{ 
					prototypeLocked &&
					<button className="signin-button" onClick={this.unlockPrototype}>
						Enter
					</button>
				}
				{
					signUp ||
					prototypeLocked ||
					<div className="signin-signup-toggle" onClick={() => this.setState({ signUp: true })}>
						Don't have an account?
					</div>
				}
				{
					signUp &&
					(prototypeLocked ||
					<div className="signin-signup-toggle" onClick={() => this.setState({ signUp: false })}>
						Already have an account?
					</div>)
				}
				{
					prototypeLocked &&
					<div className="signin-signup-toggle">
						Alpha v0.0a (a for alpha)
					</div>
				}
				
			</div>
		)
	}
}