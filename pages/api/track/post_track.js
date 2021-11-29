import prisma from '../../../lib/prisma.js';

export default async (req, res) => {
  const { } = req.body 
  const track = await prisma.track.create({ 
    data: {
    	
    }
  })
  res.json(track)
}
