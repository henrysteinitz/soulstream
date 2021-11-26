import prisma from '../../../lib/prisma.js';

export default async (req, res) => {
  const { body, trackId, startTime, endTime } = req.body 
  const verse = await prisma.verse.create({ 
    data: {
    	body,
    	trackId,
    	startTime,
    	endTime
    }
  })
  res.json(verse)
}
