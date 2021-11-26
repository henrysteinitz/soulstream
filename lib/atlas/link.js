import React from 'react'
import { useRouter } from 'next/router'

const Link = ({ to, children }) => {

}

const LinkWithContext = ({ to, children }) => {
	const atlas = this.context
	return (
		<div onClick={() => atlas.push(to)}>
			{ children }
		</div>
	)
}

export default Link