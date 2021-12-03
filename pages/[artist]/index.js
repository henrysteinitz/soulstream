import React from "react"
import { GetStaticProps } from "next"
import { useRouter } from 'next/router'
import { PrismaClient } from '@prisma/client';
import Atlas from '../../lib/atlas/atlas.js'
import Main from '../main.js'


function Home(props){
	const router = useRouter()
	Atlas.setPath('/' + props.artist.url)
	// console.log(router.pathname)

	return <Main {...props} pathname={router.pathname}/>
}

export async function getStaticPaths(context) {
	// TODO: Will this scale? Suspect...
	let prisma = new PrismaClient();
	const artists = await prisma.artist.findMany({
		select: {
			url: true
		}
	})

	return {
		paths: artists.map(artist => ('/' + artist.url)),
		fallback: false
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
			url: true,
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
	    	},
	    	accounts: {
	    		include: {
		    		account: {
	    				select: {
	    					id: true
	    				}
	    			}
	    		}
	    	}
		},
		where: {
			url: artistUrl
		}
	})

	const history = await prisma.trackPlay.findMany({
		include: {
			track: {
				select: {
					id: true,
					title: true,
					audioUrl: true,
					artUrl: true,
					url: true,
					artists: {
			    		include: {
			    			artist: {
			    				select: {
			    					name: true
			    				}
			    			}
			    		}
	    			}
				}
			}
		},
		where: {
			accountId: { in: artist.accounts.map(x => x.account.id)}
		}
	})
	console.log(history)

	const artistNoTracks = {artist: {id: artist.id, name: artist.name, pictureUrl: artist.pictureUrl}}
	const tracks = artist.tracks.map(x => x.track)
	tracks.forEach(track => {
		track.artists = [artistNoTracks]
	})

	return { props: { artist, history, stream: tracks }}
}

export default Home