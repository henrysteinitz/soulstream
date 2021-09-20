export default async (req, res) => {
	const { artistUrl } = req.body
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
	res.json(artist)
}