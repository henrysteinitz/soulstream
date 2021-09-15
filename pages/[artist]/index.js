import React from "react"
import { GetStaticProps } from "next"
import { useRouter } from 'next/router'
import { PrismaClient } from '@prisma/client';
import Atlas from '../../lib/atlas/atlas.js'
import Main from '../main.js'


function Home(props){
	const router = useRouter()
	Atlas.setPath(router.pathname)
	Atlas.setState({ artist: router.asPath.slice(1) })

	return <Main {...props} pathname={router.pathname}/>
}

export async function getStaticPaths(context) {
	return {
		paths: [],
		fallback: true
	}
}

export async function getStaticProps(context){
	let prisma = new PrismaClient();
	const { artist: artistUrl } = context.params

	const artist = await prisma.artist.findUnique({
		select: {
			id: true,
			name: true,
			pictureUrl: true,
			tracks: {
	    		include: {
	    			track: {
	    				select: {
	    					id: true,
	    					title: true,
	    					audioUrl: true,
	    					artUrl: true,
	    					url: true,
	    				}
	    			}
	    		}
	    	}
		},
		where: {
			url: artistUrl
		}
	})

	return { props: { artist } }
}

export default Home