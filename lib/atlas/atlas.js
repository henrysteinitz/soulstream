import React, { useContext } from 'react'
import classnames from 'classnames'

class AtlasClass {
	constructor() {
		this.history = []
		this.now = -1
		this.state = {}
		this.path
	}

	padWithSlash = (path) => {
		if (path[0] !== '/') {
			path = '/' + path
		}
		return path
	}

	setPath = (path) => {
		this.path = this.padWithSlash(path)
		this.history.push(this.padWithSlash(path))
		typeof window != "undefined" && window.location.replace(this.padWithSlash(path))
		this.now += 1
	}	

	setState = (state) => {
		Object.keys(state).forEach(x => {
			this.state[x] = state[x]
		})
	}
	back = () => this.now -= 1
	forward = () => this.now += 1
}

const Atlas = new AtlasClass()

export const AtlasContext = React.createContext(Atlas)
export const AtlasProvider = AtlasContext.Provider
export const AtlasConsumer = AtlasContext.Consumer

export const Route = ({ path, children }) => (
	<AtlasConsumer>
		{
			(atlas) => {
				console.log(`path: ${path}`)
				console.log(`apath: ${atlas.path}`)
				// TODO: Support inexact routes	
				if (atlas.path !== path) {
					return null
				}
				return children
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

