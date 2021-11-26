import prisma from '../../../lib/prisma.js';

export default async (req, res) => {
  const { trackId } = req.body 
  const lyrics = await prisma.verse.findMany({ 
    where: { trackId },
    orderBy: [
    	{startTime: 'asc'},
    	{endTime: 'asc'}
    ]
  })
  res.json(lyrics)
}
