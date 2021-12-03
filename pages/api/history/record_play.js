import prisma from '../../../lib/prisma.js';

export default async (req, res) => {
  const { trackId, accountId } = req.body 
  const play = await prisma.trackPlay.create({ 
  	data: {
  		trackId,
  		accountId
  	}
  })
  res.json(play)
}
