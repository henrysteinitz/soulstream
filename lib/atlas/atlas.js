import React, { useContext } from 'react'
import classnames from 'classnames'

// TODO: MAKE NOT HORRENDOUS

const padWithSlash = (path) => {
	let newPath = path
	if (newPath[0] !== '/') {
		newPath = '/' + newPath
	}
	if (newPath.length > 1 && newPath[newPath.length - 1] === '/') {
		newPath = newPath.slice(0, newPath.length - 1)
	}
	return newPath
}

const isWildcard = (x) => {
	if (x.length < 2) {
		return false
	}
	return (x[0] === '[') && (x[x.length - 1] === ']')
}

const matchPaths = (p1, p2) => {
	const s1 = padWithSlash(p1)
	const s2 = padWithSlash(p2)
	if (s1 === '/') {
		return s2 === '/' 
	}
	const dirs1 = s1.split('/')
	const dirs2 = s2.split('/')
	if (dirs1.length !== dirs2.length) {
		return false
	}
	for (let i = 0; i < dirs1.length; i++) {
		if (isWildcard(dirs1[i])) {
			continue
		}
		if (isWildcard(dirs2[i])) {
			continue
		}
		if (dirs1[i] !== dirs2[i]) {
			return false
		}
	}
	return true
}

class AtlasClass {
	constructor(path) {
		this.history = [padWithSlash(path || '/')]
		this.now = 0
		this.state = {}
		this.path = this.history[0]
		this.trackQueue = []
		this.queueIndex = 0
	}

	padWithSlash = (path) => {
		if (path[0] !== '/') {
			path = '/' + path
		}
		return path
	}

	setPath = (path) => {
		this.path = padWithSlash(path)
		this.history.push(padWithSlash(path))
		// typeof window != "undefined" && window.location.replace(this.padWithSlash(path))
		this.now += 1
		this.reRender()
	}	

	setState = (state) => {
		Object.keys(state).forEach(x => {
			this.state[x] = state[x]
		})
	}
	back = () => this.now -= 1
	forward = () => this.now += 1

	reRender = () => {} // Main overwrites with Main.forceUpdate()

	getLastUrlSegment = () => {
		const dirs = padWithSlash(this.path).split('/')
		return dirs[dirs.length - 1]
	}

	isArtist = () => {
		const last = this.getLastUrlSegment()
		return (this.path[0] === '/') && (last.length === this.path.length - 1) && (last.length > 0)
	}

	addTrackToQueue = (track) => this.nextUp.push(track)
}



const Atlas = new AtlasClass()

export const AtlasContext = React.createContext(Atlas)
export const AtlasProvider = AtlasContext.Provider
export const AtlasConsumer = AtlasContext.Consumer

export const Route = ({ path, children }) => (

	<AtlasConsumer>
		{
			(atlas) => {
				return matchPaths(atlas.path, path) && children
			}
		}
	</AtlasConsumer>
)

const handleClick = (atlas, path) => {
	atlas.setPath(path)
}

export const Link = ({ to, className, children, activeClassName }) => {
	return (
		<AtlasConsumer>
		{ 
			(atlas) => (
			<a onClick={() => handleClick(atlas, to)} className={classnames('atlas-link', className,  { activeClassName: atlas.path === to })}>
				{ children }
			</a>)
		}
		</AtlasConsumer>
	)
}



export default Atlas

