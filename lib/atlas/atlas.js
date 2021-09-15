import React, { useContext } from 'react'

class AtlasClass {
	constructor() {
		this.history = []
		this.now = -1
		this.state = {}
	}

	padWithSlash = (path) => {
		if (path[0] !== '/') {
			path = '/' + path
		}
		return path
	}

	setPath = (path) => {
		this.history.push(this.padWithSlash(path))
		this.now += 1
	}	

	setState = (state) => {
		Object.keys(state).forEach(x => {
			this.state[x] = state[x]
		})
	}

	back = () => this.now -= 1

	forward = () => this.now += 1

	path = () => this.history[this.now]
}

const Atlas = new AtlasClass()
export const AtlasContext = React.createContext(Atlas)
export const AtlasProvider = AtlasContext.Provider
export const AtlasConsumer = AtlasContext.Consumer

export const Route = ({ path, children }) => (
	<AtlasConsumer>
		{
			(atlas) => {
				// TODO: Support inexact routes	
				if (atlas.path() !== path) {
					return null
				}

				return children
			}
		}
	</AtlasConsumer>
)

const handleClick = (atlas, path) => {
	atlas.push(path)
}

export const Link = ({ to, className, children }) => {
	return (
		<AtlasConsumer>
		{ 
			(atlas) => (
			<a onClick={() => handleClick(atlas, to)} className={className}>
				{ children }
			</a>)
		}
		</AtlasConsumer>
	)
}

export default Atlas

