import React from "react"
import { GetStaticProps } from "next"
import { useRouter } from 'next/router'
import { PrismaClient } from '@prisma/client';
import Atlas from '../lib/atlas/atlas.js'
import Main from './main.js'

function Home(props){
	const router = useRouter()
	return <Main {...props} pathname={router.pathname}/>
}

export async function getStaticProps(context){
	let prisma = new PrismaClient();
	const stream = await prisma.track.findMany({
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
	    	},
	    	albums: {
	    		include: {
	    			album: {
	    				select: {
	    					title: true
	    				}
	    			}
	    		}
	    	},
	    	verses: {
	    		select: {
	    			body: true,
	    			startTime: true,
	    			endTime: true
	    		},
	    		orderBy: [
    				{startTime: 'asc'},
    				{endTime: 'asc'}
    			]
	    	}
	}})

	return { props: { stream } }
}

export default Home